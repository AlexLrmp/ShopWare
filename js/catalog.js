/* ShopWare - catalog.js
   Dibuja el catálogo desde js/data.js: familias (nivel 1), productos y filtros de cada familia (nivel 2)
   y la página de ofertas. Así, agregar un producto es editar un solo archivo. */
SW.catalog = (() => {
  'use strict';
  const { $, $$, money, precioFinal } = SW.u;
  const { PRODUCTOS, FAMILIAS } = SW.data;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function precioHTML(p) {
    return p.oferta
      ? `<p><span class="precio-original"><span class="solo-lector">Precio original </span>${money(p.precio)}</span><span class="precio-oferta"><span class="solo-lector">Precio en oferta </span>${money(precioFinal(p))}</span></p>`
      : `<p class="precio">${money(p.precio)}</p>`;
  }

  function productoCard(p) {
    const f = precioFinal(p);
    return `<article class="producto-card revelar${p.oferta ? ' oferta' : ''}" data-id="${p.id}" data-nombre="${esc(p.nombre)}" data-precio="${f}" data-marca="${esc(p.marca)}" data-tags="${esc(p.tags.join('|'))}" data-oferta="${p.oferta ? 1 : 0}">
      ${p.oferta ? `<span class="badge-oferta">-${p.oferta}%</span>` : ''}
      <a class="producto-enlace" href="${SW.base + p.ruta}?p=${p.id}" data-ver="${p.id}" aria-haspopup="dialog">
        <div class="producto-img"><img src="${SW.base + p.img}" alt="${esc(p.alt)}" width="400" height="400" loading="lazy"></div>
        <div class="producto-info"><p class="tipo">${esc(p.marca)}</p><h3>${esc(p.nombre)}</h3><span class="card-rating" data-id="${p.id}"></span></div>
      </a>
      <div class="producto-pie">${precioHTML(p)}
        <button type="button" class="btn-agregar" data-agregar data-id="${p.id}" data-nombre="${esc(p.nombre)}" data-precio="${f}" aria-label="Agregar ${esc(p.nombre)} al carrito">Agregar</button>
      </div>
    </article>`;
  }

  function familiaCard(f, n) {
    const prods = PRODUCTOS.filter(p => p.familia === f.slug);
    const desde = Math.min(...prods.map(precioFinal));
    return `<a class="familia-card revelar" href="${SW.base}categorias/${f.slug}.html">
      <span class="familia-num" aria-hidden="true">${String(n).padStart(2, '0')}</span>
      <div class="mosaico">${prods.slice(0, 3).map(p => `<img src="${SW.base + p.img}" alt="${esc(p.alt)}" width="160" height="160" loading="lazy">`).join('')}</div>
      <div class="familia-info"><h3>${esc(f.nombre)}</h3><p>${esc(f.desc)}</p>
        <p class="familia-meta"><span>${prods.length} ${prods.length === 1 ? 'modelo' : 'modelos'}</span><span>Desde ${money(desde)}</span></p></div>
      <span class="familia-flecha" aria-hidden="true">→</span>
    </a>`;
  }

  const chip = (name, v) => `<label class="chip"><input type="checkbox" name="${name}" value="${esc(v)}"><span>${esc(v)}</span></label>`;

  function renderFamilia(slug) {
    const grid = $('.productos[data-familia]');
    const prods = PRODUCTOS.filter(p => p.familia === slug);
    if (!prods.length) return;
    grid.innerHTML = prods.map(productoCard).join('');
    const marcas = [...new Set(prods.map(p => p.marca))].sort((a, b) => a.localeCompare(b, 'es'));
    const tags = [...new Set(prods.flatMap(p => p.tags))];
    $('#facet-marcas').innerHTML = marcas.map(m => chip('marca', m)).join('');
    $('#facet-tags').innerHTML = tags.map(t => chip('tag', t)).join('');
    $('#grupo-marcas').hidden = marcas.length < 2;
    $('#grupo-tags').hidden = !tags.length;
    const tope = Math.ceil(Math.max(...prods.map(precioFinal)) / 50) * 50;
    const max = $('#precio-max');
    max.max = tope;
    max.step = tope <= 500 ? 10 : 50;
    max.value = tope;
    $('#precio-tope').textContent = 'S/ ' + tope;
  }

  function init() {
    $$('.familias[data-cat]').forEach(box => {
      box.innerHTML = FAMILIAS.map((f, i) => [f, i + 1]).filter(([f]) => f.cat === box.dataset.cat).map(([f, n]) => familiaCard(f, n)).join('');
    });
    $$('[data-cat-meta]').forEach(s => {
      const fams = FAMILIAS.filter(f => f.cat === s.dataset.catMeta);
      const n = PRODUCTOS.filter(p => p.cat === s.dataset.catMeta).length;
      s.textContent = fams.length + ' familias · ' + n + ' productos';
    });
    const fam = document.body.dataset.familia;
    if (fam) renderFamilia(fam);
    const of = $('.productos[data-ofertas]');
    if (of) of.innerHTML = PRODUCTOS.filter(p => p.oferta).map(productoCard).join('');
  }

  return { init };
})();
