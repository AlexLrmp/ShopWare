/* ShopWare - payment.js
   Pasarela de pago simulada: Visa, Mastercard, Yape y Plin (no se envía ni guarda ningún dato). */
SW.payment = (() => {
  'use strict';
  const { $, $$, toast, vincular, mensajeForm } = SW.u;

  function abrir() {
    const dlg = $('#pago');
    if (!dlg) return;
    SW.panels.cerrarTodos();
    const total = $('#carrito-total').textContent;
    $('#pago-total').textContent = total;
    $('#pago-form-vista').hidden = false;
    $('#pago-ok-vista').hidden = true;
    const btn = $('#pago-boton');
    btn.disabled = false;
    btn.textContent = 'Pagar ' + total;
    dlg.showModal();
    document.body.classList.add('bloqueado');
  }

  function init() {
    const dlg = $('#pago'), form = $('#form-pago');
    if (!dlg || !form) return;
    const metodo = () => $('input[name="metodo"]:checked', form).value;
    const oculto = i => i.closest('[hidden]');
    const luhn = d => [...d].reverse().reduce((s, c, k) => { let n = +c; if (k % 2) { n *= 2; if (n > 9) n -= 9; } return s + n; }, 0) % 10 === 0;

    const ok = vincular(form, {
      titular: (v, f, i) => (oculto(i) ? '' : v.trim().length < 3 ? 'Escribe el nombre como figura en la tarjeta.' : ''),
      tarjeta: (v, f, i) => {
        if (oculto(i)) return '';
        const d = v.replace(/\s/g, '');
        if (!/^\d{13,19}$/.test(d)) return 'Ingresa el número completo de tu tarjeta.';
        if (!luhn(d)) return 'El número de tarjeta no es válido.';
        if (metodo() === 'visa' && !/^4/.test(d)) return 'Este número no corresponde a una tarjeta Visa.';
        if (metodo() === 'mastercard' && !/^(5[1-5]|2[2-7])/.test(d)) return 'Este número no corresponde a una Mastercard.';
        return '';
      },
      vence: (v, f, i) => {
        if (oculto(i)) return '';
        const m = /^(0[1-9]|1[0-2])\/(\d{2})$/.exec(v);
        if (!m) return 'Usa el formato MM/AA.';
        const hoy = new Date();
        return +('20' + m[2]) * 12 + +m[1] < hoy.getFullYear() * 12 + hoy.getMonth() + 1 ? 'La tarjeta está vencida.' : '';
      },
      cvv: (v, f, i) => (oculto(i) ? '' : /^\d{3,4}$/.test(v) ? '' : 'Ingresa 3 o 4 dígitos.'),
      celular: (v, f, i) => (oculto(i) ? '' : /^9\d{8}$/.test(v) ? '' : 'Ingresa un celular de 9 dígitos que empiece con 9.'),
      codigo: (v, f, i) => (oculto(i) ? '' : /^\d{6}$/.test(v) ? '' : 'El código tiene 6 dígitos.')
    });

    $('#tarjeta', form).addEventListener('input', e => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim(); });
    $('#vence', form).addEventListener('input', e => {
      const d = e.target.value.replace(/\D/g, '').slice(0, 4);
      e.target.value = d.length > 2 ? d.slice(0, 2) + '/' + d.slice(2) : d;
    });
    ['celular', 'codigo', 'cvv'].forEach(id => $('#' + id, form).addEventListener('input', e => { e.target.value = e.target.value.replace(/\D/g, ''); }));

    const limpiarCampos = () => $$('.campo', form).forEach(c => {
      c.classList.remove('valido', 'invalido');
      $('.error-msg', c).textContent = '';
      delete $('input', c).dataset.tocado;
    });

    $$('input[name="metodo"]', form).forEach(r => r.addEventListener('change', () => {
      const tarjeta = ['visa', 'mastercard'].includes(metodo());
      $('#pago-tarjeta').hidden = !tarjeta;
      $('#pago-movil').hidden = tarjeta;
      $$('.campo input', form).forEach(i => { i.value = ''; });
      limpiarCampos();
      mensajeForm(form, '', '');
    }));

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!ok()) return mensajeForm(form, 'Revisa los campos marcados.', 'error');
      const btn = $('#pago-boton'), total = $('#carrito-total').textContent;
      const nombre = $('input[name="metodo"]:checked + span', form).textContent;
      btn.disabled = true;
      btn.textContent = 'Procesando pago…';
      setTimeout(() => {
        const orden = 'SW-' + String(Math.floor(Math.random() * 900000) + 100000);
        SW.cart.vaciar();
        form.reset();
        $('#pago-tarjeta').hidden = false;
        $('#pago-movil').hidden = true;
        limpiarCampos();
        mensajeForm(form, '', '');
        $('#pago-form-vista').hidden = true;
        const okv = $('#pago-ok-vista');
        $('#pago-ok-texto').textContent = 'Pagaste ' + total + ' con ' + nombre + '. Tu número de pedido es ' + orden + '. Gracias por elegir ShopWare.';
        okv.hidden = false;
        okv.focus();
        toast('Pago aprobado. Pedido ' + orden + '.');
      }, 1600);
    });

    $$('[data-cerrar-pago]', dlg).forEach(b => b.addEventListener('click', () => dlg.close()));
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => document.body.classList.remove('bloqueado'));
  }

  return { init, abrir };
})();
