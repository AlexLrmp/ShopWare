/* ShopWare - utils.js
   Utilidades compartidas: DOM, almacenamiento, toasts, rotador automático y motor de validación. */
window.SW = window.SW || {};
SW.u = (() => {
  'use strict';
  document.documentElement.classList.add('js');
  SW.base = document.body.dataset.base || ''; // '../' en las páginas dentro de /categorias

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const money = n => 'S/ ' + n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const precioFinal = p => (p.oferta ? Math.round(p.precio * (1 - p.oferta / 100)) : p.precio);
  const K = { users: 'sw_usuarios', session: 'sw_sesion', cart: 'sw_carrito', audio: 'sw_audio' };

  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* sin almacenamiento */ } },
    del(k) { try { localStorage.removeItem(k); } catch { /* sin almacenamiento */ } }
  };

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };

  function toast(msg, tipo = 'ok') {
    const box = $('#toasts');
    if (!box) return;
    const t = el('p', 'toast' + (tipo === 'error' ? ' error' : ''), msg);
    box.appendChild(t);
    setTimeout(() => { t.classList.add('saliendo'); setTimeout(() => t.remove(), 300); }, 2800);
  }

  async function hash(txt) {
    try {
      const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt));
      return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
    } catch { return btoa(unescape(encodeURIComponent(txt))); }
  }

  /* Resolución de imágenes: prueba .jpg/.jpeg/.png/.webp una sola vez por producto (con caché)
     y, si no existe ninguna, devuelve un marcador "Imagen pendiente". */
  const EXTS = ['jpg', 'jpeg', 'png', 'webp'];
  const MARCADOR = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#dfe2e6"/>'
    + '<rect x="120" y="130" width="160" height="110" rx="12" fill="none" stroke="#8a9099" stroke-width="6"/>'
    + '<circle cx="165" cy="170" r="14" fill="#8a9099"/><path d="M130 230l45-40 35 30 25-20 45 30" fill="none" stroke="#8a9099" stroke-width="6"/>'
    + '<text x="200" y="285" font-family="Arial" font-size="20" text-anchor="middle" fill="#4a5058">Imagen pendiente</text></svg>');
  const cacheImg = new Map();
  const cargaOk = src => new Promise(res => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(false); i.src = src; });
  function resolverImagen(src) {
    if (src === MARCADOR || src.startsWith('data:')) return Promise.resolve(src);
    const m = /^(.*)\.(jpe?g|png|webp)(\?.*)?$/i.exec(src);
    const clave = m ? m[1] : src;
    if (!cacheImg.has(clave)) {
      cacheImg.set(clave, (async () => {
        if (await cargaOk(src)) return src;
        if (m) for (const e of EXTS) { const c = m[1] + '.' + e; if (c !== src && await cargaOk(c)) return c; }
        return MARCADOR;
      })());
    }
    return cacheImg.get(clave);
  }

  /* Rotador automático (galería del modal y carrusel): pausa con mouse, foco o botón. */
  function rotador({ total, ir, ms = 3800, area, pausaBtn }) {
    let i = 0, timer = null, encima = false;
    let pausado = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parar = () => { clearInterval(timer); timer = null; };
    const api = {
      ir(n) { i = (n + total()) % total(); ir(i); },
      get actual() { return i; },
      reiniciar() { parar(); if (!pausado && !encima && total() > 1) timer = setInterval(() => api.ir(i + 1), ms); },
      detener: parar
    };
    const pintar = () => {
      if (!pausaBtn) return;
      pausaBtn.setAttribute('aria-pressed', String(pausado));
      pausaBtn.textContent = pausado ? 'Reproducir' : 'Pausar';
    };
    if (pausaBtn) pausaBtn.addEventListener('click', () => { pausado = !pausado; pintar(); api.reiniciar(); });
    if (area) {
      [['mouseenter', true], ['mouseleave', false], ['focusin', true], ['focusout', false]]
        .forEach(([ev, v]) => area.addEventListener(ev, () => { encima = v; api.reiniciar(); }));
    }
    pintar();
    return api;
  }

  /* ---------- Motor de validación en tiempo real ---------- */
  function estado(input, msg) {
    const campo = input.closest('.campo');
    $('.error-msg', campo).textContent = msg;
    campo.classList.toggle('invalido', !!msg);
    campo.classList.toggle('valido', !msg && input.value.trim() !== '');
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }

  function vincular(form, reglas, dependencias = {}) {
    const validar = i => { const m = reglas[i.id](i.value, form, i); estado(i, m); return !m; };
    Object.keys(reglas).forEach(id => {
      const i = $('#' + id, form);
      i.addEventListener('blur', () => { i.dataset.tocado = '1'; validar(i); });
      i.addEventListener('input', () => {
        if (i.dataset.tocado) validar(i);
        (dependencias[id] || []).forEach(d => { const x = $('#' + d, form); if (x.dataset.tocado) validar(x); });
      });
    });
    return () => {
      const malos = Object.keys(reglas).map(id => $('#' + id, form)).filter(i => { i.dataset.tocado = '1'; return !validar(i); });
      if (malos.length) malos[0].focus();
      return !malos.length;
    };
  }

  const R = {
    nombre: v => (!v.trim() ? 'Escribe tu nombre completo.' : v.trim().split(/\s+/).length < 2 ? 'Incluye al menos nombre y apellido.' : ''),
    email: v => (!v.trim() ? 'Escribe tu correo electrónico.' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? 'Formato no válido. Ejemplo: nombre@correo.com' : ''),
    password: v => (!v ? 'Escribe una contraseña.' : v.length < 8 ? 'Usa al menos 8 caracteres.' : !/[A-Za-z]/.test(v) || !/\d/.test(v) ? 'Combina letras y números.' : ''),
    loginPass: v => (v ? '' : 'Escribe tu contraseña.')
  };

  function mensajeForm(form, texto, tipo) {
    const m = $('.estado-form', form.parentElement);
    m.textContent = texto;
    m.className = 'estado-form' + (tipo ? ' ' + tipo : '');
  }

  return { $, $$, money, norm, precioFinal, K, store, el, toast, hash, resolverImagen, rotador, estado, vincular, R, mensajeForm };
})();
