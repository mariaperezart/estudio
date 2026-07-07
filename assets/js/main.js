document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('is-open');
      const expanded = links.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && revealEls.length && !reducedMotion) {
    // El contenido ya es visible por defecto (ver styles.css); solo ahora lo
    // ocultamos para poder animarlo, evitando que quede en blanco si algo falla.
    document.documentElement.classList.add('js-animations');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
      // Red de seguridad: si algo revela el resto del documento sin pasar por
      // scroll (una captura automática, un lector que salta directo a una
      // sección), nos aseguramos de no dejar nada permanentemente invisible.
    }, { threshold: 0.15, rootMargin: '0px 0px 400px 0px' });
    revealEls.forEach((el) => observer.observe(el));

    window.setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => el.classList.add('is-visible'));
    }, 2000);
  }

  document.querySelectorAll('form[data-pending-notice]').forEach((form) => {
    form.addEventListener('submit', () => {
      const action = form.getAttribute('action') || '';
      if (action.includes('TU_ID_DE_FORMSPREE')) {
        console.warn('Formulario sin conectar: sustituye TU_ID_DE_FORMSPREE por el endpoint real de Formspree.');
      }
    });
  });
});
