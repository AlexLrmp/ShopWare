/* ShopWare - auth.js
   Sesión simulada con localStorage: registro, login, perfil y estado del header. */
SW.auth = (() => {
  'use strict';
  const { $, $$, el, K, store, toast, hash, estado, vincular, R, mensajeForm } = SW.u;

  const users = () => store.get(K.users, []);
  const current = () => store.get(K.session, null);
  const start = u => store.set(K.session, { nombre: u.nombre, email: u.email, desde: u.desde });
  const logout = () => store.del(K.session);

  function pintarSesion() {
    const u = current();
    $$('[data-auth="guest"]').forEach(n => { n.hidden = !!u; });
    $$('[data-auth="user"]').forEach(n => { n.hidden = !u; });
    const s = $('#saludo');
    if (s && u) s.textContent = 'Hola, ' + u.nombre.split(' ')[0];
  }

  function initVerPass() {
    $$('.campo-password').forEach(c => {
      const input = $('input', c);
      const b = el('button', 'ver-pass', 'Mostrar');
      b.type = 'button';
      b.setAttribute('aria-label', 'Mostrar u ocultar contraseña');
      b.addEventListener('click', () => {
        const ver = input.type === 'password';
        input.type = ver ? 'text' : 'password';
        b.textContent = ver ? 'Ocultar' : 'Mostrar';
      });
      c.appendChild(b);
    });
  }

  function initLogin() {
    const form = $('#form-login');
    if (!form) return;
    const ok = vincular(form, { email: R.email, password: R.loginPass });
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!ok()) return mensajeForm(form, 'Revisa los campos marcados.', 'error');
      const btn = $('button[type="submit"]', form);
      btn.disabled = true; btn.textContent = 'Ingresando…';
      const email = $('#email', form).value.trim().toLowerCase();
      const h = await hash($('#password', form).value);
      const u = users().find(x => x.email === email && x.hash === h);
      if (!u) {
        mensajeForm(form, 'Correo o contraseña incorrectos. ¿Aún no tienes cuenta? Regístrate.', 'error');
        btn.disabled = false; btn.textContent = 'Ingresar';
        return;
      }
      start(u);
      mensajeForm(form, '¡Bienvenido, ' + u.nombre.split(' ')[0] + '! Redirigiendo a tu perfil…', 'exito');
      setTimeout(() => { location.href = 'perfil.html'; }, 1000);
    });
  }

  function initRegistro() {
    const form = $('#form-registro');
    if (!form) return;
    const medidor = $('#medidor'), txt = $('#fuerza');
    const ok = vincular(form, {
      nombre: R.nombre, email: R.email, password: R.password,
      confirmar: (v, f) => (!v ? 'Repite tu contraseña.' : v !== $('#password', f).value ? 'Las contraseñas no coinciden.' : '')
    }, { password: ['confirmar'] });

    const passwordInput = $('#password', form);
    if (passwordInput && medidor) {
      passwordInput.addEventListener('input', e => {
        const v = e.target.value;
        const n = v ? Math.min(4, (v.length >= 8) + (/[a-z]/.test(v) && /[A-Z]/.test(v)) + /\d/.test(v) + /[^A-Za-z0-9]/.test(v)) : 0;
        
        // Actualizamos tanto el atributo de nivel para el CSS como el ancho directo de la barra interna
        medidor.setAttribute('data-nivel', n);
        const barraInterna = medidor.firstElementChild;
        if (barraInterna) {
          barraInterna.style.width = (n * 25) + '%';
        }
        
        if (txt) {
          txt.textContent = v ? ['Muy débil', 'Débil', 'Aceptable', 'Buena', 'Excelente'][n] : 'Mínimo 8 caracteres con letras y números.';
        }
      });
    }

    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!ok()) return mensajeForm(form, 'Corrige los campos marcados para continuar.', 'error');
      const email = $('#email', form).value.trim().toLowerCase();
      const lista = users();
      if (lista.some(u => u.email === email)) {
        estado($('#email', form), 'Este correo ya está registrado. Inicia sesión.');
        return mensajeForm(form, 'Ya existe una cuenta con ese correo.', 'error');
      }
      const user = { nombre: $('#nombre', form).value.trim(), email, hash: await hash($('#password', form).value), desde: new Date().getFullYear() };
      store.set(K.users, [...lista, user]);
      start(user);
      mensajeForm(form, '¡Cuenta creada! Te estamos llevando a tu perfil…', 'exito');
      setTimeout(() => { location.href = 'perfil.html'; }, 1100);
    });
  }

  function initPerfil() {
    if (!$('#perfil-sesion')) return;
    const u = current();
    $('#perfil-sesion').hidden = !u;
    $('#perfil-invitado').hidden = !!u;
    if (!u) return;
    $('#perfil-nombre').textContent = u.nombre;
    $('#perfil-correo').textContent = u.email;
    $('#perfil-desde').textContent = u.desde;
    $('#perfil-avatar').textContent = u.nombre.trim()[0].toUpperCase();
  }

  function init() {
    pintarSesion();
    initVerPass();
    $$('[data-accion="logout"]').forEach(b => b.addEventListener('click', e => {
      e.preventDefault();
      logout(); pintarSesion(); initPerfil();
      toast('Cerraste sesión correctamente.');
    }));
    initLogin(); initRegistro(); initPerfil();
  }

  return { init, current, logout };
})();