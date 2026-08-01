/* Único comportamiento del sitio: abrir el menú en pantallas estrechas.
   No hay animaciones de entrada ni efectos de scroll — el contenido está
   disponible desde el primer pintado, con o sin JavaScript. */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.masthead__toggle');
  const menu = document.querySelector('.masthead__nav');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Cerrar' : 'Menú';
  });
});
