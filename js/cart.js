/* ShopWare - cart.js
   Carrito de compras con localStorage: agregar, cantidades, total y acceso al pago. */
SW.cart = (() => {
  'use strict';
  const { $, el, K, store, money, toast } = SW.u;

  const items = () => store.get(K.cart, []);
  const guardar = i => { store.set(K.cart, i); render(); };

  function add(p) {
    const lista = items();
    const e = lista.find(i => i.id === p.id);
    e ? e.qty++ : lista.push({ ...p, qty: 1 });
    guardar(lista);
  }
  const cambiar = (id, d) => guardar(items().map(i => (i.id === id ? { ...i, qty: i.qty + d } : i)).filter(i => i.qty > 0));
  const quitar = id => guardar(items().filter(i => i.id !== id));
  const vaciar = () => guardar([]);

  function render() {
    const lista = items();
    const total = lista.reduce((s, i) => s + i.precio * i.qty, 0);
    const cant = lista.reduce((s, i) => s + i.qty, 0);
    const c = $('#carrito-contador');
    if (c) { c.textContent = cant; c.classList.remove('salto'); void c.offsetWidth; if (cant) c.classList.add('salto'); }
    const ul = $('#carrito-lista');
    if (!ul) return;
    ul.replaceChildren();
    if (!lista.length) ul.appendChild(el('li', 'carrito-vacio', 'Tu carrito está vacío. Explora el catálogo y agrega productos.'));
    lista.forEach(i => {
      const li = el('li', 'carrito-item');
      li.appendChild(el('strong', '', i.nombre));
      li.appendChild(el('span', 'precio', money(i.precio * i.qty)));
      const q = el('div', 'cantidad');
      const mk = (t, label, fn) => { const b = el('button', '', t); b.type = 'button'; b.setAttribute('aria-label', label + ' ' + i.nombre); b.addEventListener('click', fn); return b; };
      q.append(mk('−', 'Quitar una unidad de', () => cambiar(i.id, -1)), el('span', '', String(i.qty)), mk('+', 'Agregar una unidad de', () => cambiar(i.id, 1)));
      const r = el('button', 'quitar', 'Eliminar');
      r.type = 'button';
      r.setAttribute('aria-label', 'Eliminar ' + i.nombre + ' del carrito');
      r.addEventListener('click', () => quitar(i.id));
      li.append(q, r);
      ul.appendChild(li);
    });
    const t = $('#carrito-total');
    if (t) t.textContent = money(total);
  }

  function init() {
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-agregar]');
      if (!b) return;
      const d = b.dataset;
      add({ id: d.id, nombre: d.nombre, precio: Number(d.precio) });
      toast(d.nombre + ' se agregó al carrito.');
      const txt = b.textContent;
      b.textContent = 'Agregado ✓';
      b.classList.add('agregado');
      setTimeout(() => { b.textContent = txt; b.classList.remove('agregado'); }, 1200);
    });
    $('#carrito-vaciar')?.addEventListener('click', () => { vaciar(); toast('Carrito vaciado.'); });
    $('#carrito-pagar')?.addEventListener('click', () => {
      if (!items().length) return toast('Agrega productos antes de pagar.', 'error');
      if (!SW.auth.current()) {
        toast('Inicia sesión para continuar con tu compra.', 'error');
        return setTimeout(() => { location.href = 'login.html'; }, 900);
      }
      SW.payment.abrir();
    });
    render();
  }

  return { init, add, vaciar, items };
})();
