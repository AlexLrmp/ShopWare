/* ShopWare - filters.js
   Nivel 2: buscador y filtros (marca, precio, características, ofertas y orden) sin recargar. */
SW.filters = (() => {
  'use strict';
  const { $, $$, money, norm } = SW.u;

  function init() {
    const f = $('#filtros');
    if (!f) return;
    const grid = $('.productos'), cards = $$('.producto-card', grid);
    const q = $('#buscador'), ord = $('#orden'), max = $('#precio-max'), salida = $('#precio-valor');
    const ofertas = $('#solo-ofertas'), info = $('#resultado-info'), activos = $('#filtros-activos'), det = $('.filtros-det');
    const tope = Number(max.max);
    cards.forEach((c, i) => { c.dataset.i = i; });

    const orden = {
      defecto: (a, b) => a.dataset.i - b.dataset.i,
      menor: (a, b) => a.dataset.precio - b.dataset.precio,
      mayor: (a, b) => b.dataset.precio - a.dataset.precio,
      nombre: (a, b) => a.dataset.nombre.localeCompare(b.dataset.nombre, 'es')
    };

    function aplicar() {
      const t = norm(q.value.trim());
      const m = Number(max.value);
      const marcas = $$('input[name="marca"]:checked', f).map(i => i.value);
      const tags = $$('input[name="tag"]:checked', f).map(i => i.value);
      let n = 0;
      cards.forEach(c => {
        const ok = (!marcas.length || marcas.includes(c.dataset.marca))
          && Number(c.dataset.precio) <= m
          && norm(c.dataset.nombre + ' ' + c.dataset.marca).includes(t)
          && (!ofertas.checked || c.dataset.oferta === '1')
          && tags.every(g => c.dataset.tags.split('|').includes(g));
        c.hidden = !ok;
        if (ok) n++;
      });
      [...cards].sort(orden[ord.value]).forEach(c => grid.appendChild(c));
      max.style.setProperty('--p', ((m - max.min) / (max.max - max.min) * 100) + '%');
      salida.textContent = m >= tope ? 'Sin límite' : money(m);
      info.textContent = n + ' de ' + cards.length + (cards.length === 1 ? ' modelo' : ' modelos');
      $('#sin-resultados').hidden = n !== 0;
      const a = (t ? 1 : 0) + marcas.length + (m < tope) + ofertas.checked + tags.length;
      activos.textContent = a;
      activos.hidden = a === 0;
    }

    det.open = matchMedia('(min-width: 901px)').matches;
    f.addEventListener('input', aplicar);
    f.addEventListener('change', aplicar);
    f.addEventListener('reset', () => setTimeout(aplicar));
    f.addEventListener('submit', e => e.preventDefault());
    aplicar();
  }

  return { init };
})();
