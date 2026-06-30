// ============================================================
// TFI · Adopción de Rust vs C++
// JS compartido para todas las páginas del portafolio
// ============================================================

(function() {
  'use strict';

  // ===== Mobile nav toggle =====
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!links.contains(e.target) && !toggle.contains(e.target) && links.classList.contains('open')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Cerrar al hacer click en un link
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // ===== Marcar link activo según la página actual =====
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === path || (path === '' && a.dataset.page === 'index.html')) {
      a.classList.add('active');
    }
  });

})();
