/* ShopWare - reviews.js
   Calificaciones y reseñas por producto (localStorage): estrellas en las tarjetas, lista y formulario en el modal. */
SW.reviews = (() => {
  'use strict';
  const { $, $$, el, store, toast, vincular, estado, mensajeForm } = SW.u;
  const KEY = 'sw_resenas';
  let actual = null, validar = null;

  const todas = () => store.get(KEY, {});
  const de = id => todas()[id] || [];
  const resumen = id => {
    const r = de(id);
    return { n: r.length, prom: r.length ? r.reduce((s, x) => s + x.e, 0) / r.length : 0 };
  };

  function estrellas(prom, n) {
    const s = el('span', 'estrellas'), f = el('span', 'estrellas-fill');
    s.setAttribute('role', 'img');
    s.setAttribute('aria-label', n ? `Calificación ${prom.toFixed(1)} de 5 según ${n} ${n === 1 ? 'reseña' : 'reseñas'}` : 'Sin calificaciones todavía');
    f.style.width = (prom / 5 * 100) + '%';
    s.appendChild(f);
    return s;
  }

  function pintarTarjetas() {
    $$('.card-rating').forEach(c => {
      const { n, prom } = resumen(c.dataset.id);
      c.replaceChildren(estrellas(prom, n), el('span', 'card-rating-n', n ? `${prom.toFixed(1)} (${n})` : 'Sé el primero en calificar'));
    });
  }

  function mostrar(id) {
    actual = id;
    const { n, prom } = resumen(id);
    $('#res-prom').textContent = n ? prom.toFixed(1) : '–';
    $('#res-estrellas').replaceChildren(estrellas(prom, n));
    $('#res-cuenta').textContent = n ? `${n} ${n === 1 ? 'reseña' : 'reseñas'}` : 'Aún no hay reseñas. ¡Escribe la primera!';
    const ul = $('#res-lista');
    ul.replaceChildren(...de(id).slice().reverse().map(r => {
      const li = el('li', 'res-item'), cab = el('div', 'res-cab');
      cab.append(el('strong', '', r.n), estrellas(r.e, 1), el('time', 'res-fecha', new Date(r.f).toLocaleDateString('es-PE', { day: 'numeric', month: 'short', year: 'numeric' })));
      li.append(cab, el('p', '', r.t));
      return li;
    }));
    const form = $('#form-resena');
    form.reset();
    $$('.campo', form).forEach(c => { c.classList.remove('valido', 'invalido'); $('.error-msg', c).textContent = ''; delete $('input,textarea', c).dataset.tocado; });
    $('#err-estrellas').textContent = '';
    mensajeForm(form, '', '');
    const u = SW.auth.current();
    if (u) $('#rs-nombre').value = u.nombre;
  }

  function init() {
    pintarTarjetas();
    const form = $('#form-resena');
    if (!form) return;
    validar = vincular(form, {
      'rs-nombre': v => (v.trim().length < 2 ? 'Escribe tu nombre.' : ''),
      'rs-texto': v => (v.trim().length < 10 ? 'Cuéntanos tu experiencia (mínimo 10 caracteres).' : v.length > 300 ? 'El máximo es de 300 caracteres.' : '')
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const sel = $('input[name="estrellas"]:checked', form);
      const okCampos = validar();
      $('#err-estrellas').textContent = sel ? '' : 'Elige de 1 a 5 estrellas.';
      if (!sel) { if (okCampos) $('input[name="estrellas"]', form).focus(); return mensajeForm(form, 'Falta tu calificación.', 'error'); }
      if (!okCampos) return mensajeForm(form, 'Revisa los campos marcados.', 'error');
      const datos = todas();
      const lista = datos[actual] || [];
      lista.push({ n: $('#rs-nombre').value.trim(), e: Number(sel.value), t: $('#rs-texto').value.trim(), f: Date.now() });
      datos[actual] = lista.slice(-50);
      store.set(KEY, datos);
      mostrar(actual);
      pintarTarjetas();
      mensajeForm(form, '¡Gracias por tu reseña!', 'exito');
      toast('Reseña publicada.');
    });
  }

  return { init, mostrar };
})();
