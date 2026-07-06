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
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
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
