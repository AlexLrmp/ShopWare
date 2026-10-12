/* ShopWare - modal.js
   Nivel 3: modal de producto con galería (imagen principal, miniaturas y autoplay). */
SW.modal = (() => {
  'use strict';
  const { $, $$, el, money, precioFinal, rotador, resolverImagen } = SW.u;
  let dlg, img, thumbs, prod = null, vistas = [], rot;

  const vistasDe = (p, src, extras) => [
    { src, z: 1, x: 50, y: 50, etq: 'vista completa' },
    { src, z: 1.9, x: 25, y: 30, etq: 'detalle superior' },
    { src, z: 1.9, x: 75, y: 70, etq: 'detalle inferior' },
    ...extras.map(s => ({ src: s, z: 1, x: 50, y: 50, etq: 'imagen adicional' }))
  ];

  function mostrar(n) {
    const v = vistas[n];
    if (!v) return;
    const aplicar = () => {
      img.src = v.src;
      img.alt = prod.alt + ' (' + v.etq + ')';
      img.style.transformOrigin = v.x + '% ' + v.y + '%';
      img.style.setProperty('--zoom', v.z);
      img.classList.remove('cambia');
    };
    if (img.getAttribute('src') === v.src) aplicar();
    else { img.classList.add('cambia'); setTimeout(aplicar, 180); }
    $$('button', thumbs).forEach((b, k) => b.setAttribute('aria-current', String(k === n)));
  }

  async function abrir(id) {
    const p = SW.data.PRODUCTOS.find(x => x.id === id);
    if (!p || !dlg) return;
    const src = await resolverImagen(SW.base + p.img);
    const extras = await Promise.all((p.extra || []).map(s => resolverImagen(SW.base + s)));
    prod = p;
    const final = precioFinal(prod);
    $('#modal-titulo').textContent = prod.nombre;
    $('#modal-desc').textContent = prod.desc;
    const pr = $('#modal-precio');
    pr.replaceChildren();
    if (prod.oferta) pr.append(el('span', 'precio-original', money(prod.precio)), el('span', 'precio-oferta', money(final)), el('span', 'badge-inline', '-' + prod.oferta + '%'));
    else pr.append(el('span', 'precio', money(final)));
    $('#modal-specs').replaceChildren(...prod.specs.map(([k, v]) => {
      const tr = el('tr'), th = el('th', '', k);
      th.scope = 'row';
      tr.append(th, el('td', '', v));
      return tr;
    }));
    const add = $('#modal-agregar');
    Object.assign(add.dataset, { id: prod.id, nombre: prod.nombre, precio: final });
    add.setAttribute('aria-label', 'Agregar ' + prod.nombre + ' al carrito');
    SW.reviews?.mostrar(prod.id);

    vistas = vistasDe(prod, src, extras);
    thumbs.replaceChildren(...vistas.map((v, k) => {
      const b = el('button'), wrap = el('span', 'mini-img'), im = el('img');
      b.type = 'button';
      b.setAttribute('aria-label', 'Ver imagen ' + (k + 1) + ' de ' + vistas.length + ': ' + v.etq);
      im.src = v.src; im.alt = ''; im.width = 80; im.height = 80;
      im.style.transformOrigin = v.x + '% ' + v.y + '%';
      im.style.setProperty('--zoom', v.z);
      wrap.appendChild(im);
      b.appendChild(wrap);
      b.addEventListener('click', () => { rot.ir(k); rot.reiniciar(); });
      return b;
    }));
    img.removeAttribute('src');
    mostrar(0);
    if (!dlg.open) dlg.showModal();
    document.body.classList.add('bloqueado');
    rot.reiniciar();
  }

  function init() {
    dlg = $('#modal');
    if (!dlg) return;
    img = $('#modal-img');
    thumbs = $('#modal-thumbs');
    rot = rotador({ total: () => vistas.length, area: $('.galeria', dlg), pausaBtn: $('#modal-pausa'), ms: 3200, ir: mostrar });
    const mover = d => { rot.ir(rot.actual + d); rot.reiniciar(); };

    dlg.addEventListener('close', () => {
      rot.detener();
      document.body.classList.remove('bloqueado');
      if (new URLSearchParams(location.search).has('p')) history.replaceState(null, '', location.pathname + location.hash);
    });
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    $('#modal-cerrar').addEventListener('click', () => dlg.close());
    $('#modal-prev').addEventListener('click', () => mover(-1));
    $('#modal-next').addEventListener('click', () => mover(1));
    dlg.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') mover(-1); if (e.key === 'ArrowRight') mover(1); });
    $('#modal-comprar').addEventListener('click', () => {
      SW.cart.add({ id: prod.id, nombre: prod.nombre, precio: precioFinal(prod) });
      dlg.close();
      SW.panels.abrir('panel-carrito');
    });
    document.addEventListener('click', e => {
      const a = e.target.closest('[data-ver]');
      if (!a) return;
      e.preventDefault();
      abrir(a.dataset.ver);
    });
    const id = new URLSearchParams(location.search).get('p');
    if (id) abrir(id);
  }

  return { init, abrir };
})();
