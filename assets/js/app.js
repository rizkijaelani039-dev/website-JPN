(() => {
  'use strict';

  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Responsive navigation
  const navToggle = qs('[data-nav-toggle]');
  const nav = qs('[data-nav]');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
    });
    qsa('a', nav).forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }));
  }

  // Knowledge Center search + category filter.
  const searchInput = qs('#knowledgeSearch');
  const filterButtons = qsa('[data-knowledge-filter]');
  const cards = qsa('[data-knowledge-card]');
  const emptyState = qs('[data-knowledge-empty]');
  const count = qs('[data-knowledge-count]');

  const filterKnowledge = () => {
    const query = (searchInput?.value || '').trim().toLowerCase();
    const active = qs('[data-knowledge-filter].is-active')?.dataset.knowledgeFilter || 'all';
    let visible = 0;

    cards.forEach(card => {
      const category = (card.dataset.category || '').toLowerCase();
      const text = (card.textContent || '').toLowerCase();
      const matchesCategory = active === 'all' || category === active;
      const matchesQuery = !query || text.includes(query);
      const show = matchesCategory && matchesQuery;
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (emptyState) emptyState.hidden = visible !== 0;
    if (count) count.textContent = `${visible} artikel`;
  };

  filterButtons.forEach(button => button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('is-active'));
    button.classList.add('is-active');
    filterKnowledge();
  }));
  searchInput?.addEventListener('input', filterKnowledge);
  filterKnowledge();

  // Contact forms: turn form fields into a WhatsApp consultation message.
  qsa('[data-contact-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '-';
      const phone = data.get('phone') || '-';
      const service = data.get('service') || 'Konsultasi';
      const message = data.get('message') || '-';
      const target = form.dataset.whatsapp || '6282249465151';
      const text = `Halo CV. Jaya Prima Nusantara, saya ${name}.%0A%0AKebutuhan: ${service}%0ANo. HP: ${phone}%0A%0A${message}`;
      window.open(`https://wa.me/${target}?text=${text}`, '_blank', 'noopener,noreferrer');
    });
  });

  // Close any opened dropdown when clicking outside.
  document.addEventListener('click', event => {
    qsa('[data-dropdown].is-open').forEach(dropdown => {
      if (!dropdown.contains(event.target)) dropdown.classList.remove('is-open');
    });
  });

  // Current year helper.
  qsa('[data-current-year]').forEach(node => {
    node.textContent = new Date().getFullYear();
  });
})();
