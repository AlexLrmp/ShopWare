/* ShopWare - main.js
   Arranque: paneles flotantes (menú de 3 líneas y carrito), búsqueda rápida, audio ambiental,
   carrusel del inicio, contacto, FAQ y animaciones de entrada. Inicializa los demás módulos. */
(() => {
  'use strict';
  const { $, $$, el, money, norm, precioFinal, store, K, toast, rotador, vincular, R, mensajeForm } = SW.u;

  /* ---------- Paneles laterales con foco accesible ---------- */
  SW.panels = (() => {
    const lista = [];
    const overlay = () => $('#overlay');

    function crear(id, disparadores) {
      const p = $('#' + id);
      if (!p) return;
      let previo = null;
      const foco = () => $$('a[href],button:not([disabled]),input:not([disabled])', p).filter(n => !n.closest('[hidden]'));
      const api = {
        id,
        abrir() {
          lista.forEach(x => x.cerrar());
          previo = document.activeElement;
          p.classList.add('abierto');
          p.setAttribute('aria-hidden', 'false');
          overlay().classList.add('visible');
          document.body.classList.add('bloqueado');
          disparadores.forEach(d => d.setAttribute('aria-expanded', 'true'));
          (foco()[0] || p).focus();
        },
        cerrar() {
          if (!p.classList.contains('abierto')) return;
          p.classList.remove('abierto');
          p.setAttribute('aria-hidden', 'true');
          overlay().classList.remove('visible');
          document.body.classList.remove('bloqueado');
          disparadores.forEach(d => d.setAttribute('aria-expanded', 'false'));
          previo && previo.focus();
        }
      };
      disparadores.forEach(d => d.addEventListener('click', api.abrir));
      $$('[data-cerrar-panel]', p).forEach(b => b.addEventListener('click', api.cerrar));
      p.addEventListener('click', e => { if (e.target.closest('a')) api.cerrar(); });
      p.addEventListener('keydown', e => {
        if (e.key !== 'Tab') return;
        const f = foco();
        if (!f.length) return;
        const [a, z] = [f[0], f[f.length - 1]];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      });
      lista.push(api);
    }

    return {
      init() {
        crear('panel-lista', $$('[data-abre="panel-lista"]'));
        crear('panel-carrito', $$('[data-abre="panel-carrito"]'));
        overlay().addEventListener('click', () => lista.forEach(p => p.cerrar()));
        document.addEventListener('keydown', e => { if (e.key === 'Escape') lista.forEach(p => p.cerrar()); });
      },
      abrir: id => lista.find(p => p.id === id)?.abrir(),
      cerrarTodos: () => lista.forEach(p => p.cerrar())
    };
  })();

  /* ---------- Imágenes: si una no carga, busca otra extensión o muestra un marcador ---------- */
  function initImagenes() {
    const reparar = im => {
      const src = im.getAttribute('src');
      if (!src || /^(data:|https?:)/.test(src) || im.dataset.reparada === src) return;
      im.dataset.reparada = src;
      SW.u.resolverImagen(src).then(real => { if (real !== src) im.src = real; });
    };
    document.addEventListener('error', e => { if (e.target instanceof HTMLImageElement) reparar(e.target); }, true);
    $$('img').forEach(im => { if (im.complete && im.naturalWidth === 0) reparar(im); });
  }

  /* ---------- Header con sombra al desplazarse ---------- */
  function initHeader() {
    const header = $('.sitio-header');
    const onScroll = () => header.classList.toggle('con-sombra', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Búsqueda rápida del panel flotante ---------- */
  function initBusquedaRapida() {
    const q = $('#busqueda-rapida');
    if (!q) return;
    const out = $('#resultados-rapidos'), base = $('#panel-base'), info = $('#rapida-info');
    q.addEventListener('input', () => {
      const t = norm(q.value.trim());
      base.hidden = !!t;
      out.hidden = !t;
      out.replaceChildren();
      if (!t) { info.textContent = ''; return; }
      const hits = SW.data.PRODUCTOS.filter(p => norm(p.nombre + ' ' + p.marca + ' ' + p.familiaNombre).includes(t)).slice(0, 8);
      info.textContent = hits.length + (hits.length === 1 ? ' resultado' : ' resultados');
      if (!hits.length) { out.appendChild(el('li', 'carrito-vacio', 'Sin resultados para «' + q.value.trim() + '».')); return; }
      hits.forEach(p => {
        const li = el('li'), a = el('a');
        a.href = SW.base + p.ruta + '?p=' + p.id;
        a.append(el('span', '', p.nombre), el('span', '', money(precioFinal(p))));
        li.appendChild(a);
        out.appendChild(li);
      });
    });
  }

  /* ---------- Audio ambiental (respeta la política de autoplay) ---------- */
  function initAudio() {
    const a = $('#audio-ambiente'), b = $('#btn-audio');
    if (!a || !b) return;
    a.volume = 0.2;
    const pintar = () => {
      const on = !a.paused;
      b.setAttribute('aria-pressed', String(on));
      b.textContent = on ? '🔊' : '🔇';
      b.setAttribute('aria-label', on ? 'Silenciar música ambiental' : 'Activar música ambiental');
    };
    const quiere = () => store.get(K.audio, true) !== false;
    const reproducir = () => a.play().catch(() => {});
    const t0 = Number(sessionStorage.getItem('sw_audio_t') || 0);
    a.addEventListener('loadedmetadata', () => { if (t0 && t0 < a.duration) a.currentTime = t0; }, { once: true });
    window.addEventListener('pagehide', () => { try { sessionStorage.setItem('sw_audio_t', a.currentTime); } catch { /* sin almacenamiento */ } });
    a.addEventListener('play', pintar);
    a.addEventListener('pause', pintar);
    a.addEventListener('error', () => { b.hidden = true; }, true);
    b.addEventListener('click', () => {
      if (a.paused) { store.set(K.audio, true); reproducir(); } else { store.set(K.audio, false); a.pause(); }
    });
    if (quiere()) {
      reproducir();
      const arrancar = e => {
        if (e.target.closest && e.target.closest('#btn-audio')) return;
        ['pointerdown', 'keydown'].forEach(ev => document.removeEventListener(ev, arrancar));
        if (quiere() && a.paused) reproducir();
      };
      ['pointerdown', 'keydown'].forEach(ev => document.addEventListener(ev, arrancar));
    }
    pintar();
  }

  /* ---------- Carrusel de destacados (inicio) ---------- */
  function initCarrusel() {
    const root = $('#carrusel');
    if (!root) return;
    const slides = $$('.slide', root), minis = $$('.carrusel-mini button', root);
    const mostrar = n => {
      slides.forEach((s, k) => {
        s.classList.toggle('activa', k === n);
        s.setAttribute('aria-hidden', String(k !== n));
        $$('a,button', s).forEach(b => { b.tabIndex = k === n ? 0 : -1; });
      });
      minis.forEach((b, k) => b.setAttribute('aria-current', String(k === n)));
    };
    const rot = rotador({ total: () => slides.length, ir: mostrar, area: root, pausaBtn: $('#carrusel-pausa'), ms: 4200 });
    const mover = d => { rot.ir(rot.actual + d); rot.reiniciar(); };
    minis.forEach((b, k) => b.addEventListener('click', () => { rot.ir(k); rot.reiniciar(); }));
    $('#carrusel-prev').addEventListener('click', () => mover(-1));
    $('#carrusel-next').addEventListener('click', () => mover(1));
    root.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') mover(-1); if (e.key === 'ArrowRight') mover(1); });
    mostrar(0);
    rot.reiniciar();
  }

  /* ---------- Video de YouTube con portada (se carga al hacer clic) ---------- */
  function initVideo() {
    const box = $('[data-video]');
    if (!box) return;
    const id = box.dataset.video, btn = $('.video-play', box), img = $('img', btn), nota = $('#video-nota');
    img.addEventListener('error', () => { img.src = 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg'; }, { once: true });
    btn.addEventListener('click', () => {
      if (location.protocol === 'file:') { // YouTube exige un origen http(s) para incrustar (si no, error 153)
        window.open('https://www.youtube.com/watch?v=' + id, '_blank', 'noopener');
        nota.hidden = false;
        return;
      }
      const f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      f.title = 'Video promocional de ShopWare';
      f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      f.referrerPolicy = 'strict-origin-when-cross-origin';
      f.allowFullscreen = true;
      box.replaceChildren(f);
      f.focus();
    });
  }

  /* ---------- Contacto ---------- */
  function initContacto() {
    const form = $('#form-contacto');
    if (!form) return;
    const cont = $('#contador-chars'), area = $('#mensaje', form);
    const ok = vincular(form, {
      nombre: R.nombre, correo: R.email,
      mensaje: v => (v.trim().length < 10 ? 'Cuéntanos un poco más (mínimo 10 caracteres).' : v.length > 500 ? 'El máximo es de 500 caracteres.' : '')
    });
    area.addEventListener('input', () => { cont.textContent = area.value.length + ' / 500'; });
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!ok()) return mensajeForm(form, 'Revisa los campos marcados.', 'error');
      form.reset();
      $$('.campo', form).forEach(c => c.classList.remove('valido', 'invalido'));
      $$('input,textarea', form).forEach(i => delete i.dataset.tocado);
      cont.textContent = '0 / 500';
      mensajeForm(form, '¡Mensaje enviado! Te responderemos en menos de 24 horas.', 'exito');
      toast('Mensaje enviado correctamente.');
    });
  }

  /* ---------- FAQ: un solo acordeón abierto ---------- */
  function initFaq() {
    const items = $$('.faq-item');
    items.forEach(d => d.addEventListener('toggle', () => { if (d.open) items.forEach(o => { if (o !== d) o.open = false; }); }));
  }

  /* ---------- Animaciones de entrada al hacer scroll ---------- */
  function initReveal() {
    const els = $$('.revelar');
    if (!els.length) return;
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(e => e.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    els.forEach((e, i) => { e.style.setProperty('--d', (i % 4) * 70 + 'ms'); io.observe(e); });
  }

  /* ---------- Arranque ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    SW.panels.init();
    ['auth', 'cart', 'payment', 'catalog', 'reviews', 'modal', 'filters', 'compare'].forEach(m => SW[m]?.init());
    initImagenes();
    initHeader();
    initBusquedaRapida();
    initAudio();
    initReveal();
    initVideo();
    ({ inicio: initCarrusel, contacto: initContacto, preguntas: initFaq, familia: initFaq })[document.body.dataset.page]?.();
  });
})();
