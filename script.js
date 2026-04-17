// ====================================================
// FORGEE — JavaScript
// ====================================================

/* ---------- Navbar scroll effect ---------- */
(function () {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 60) {
      navbar.style.background = 'rgba(10, 10, 10, 0.97)';
    } else {
      navbar.style.background = 'rgba(10, 10, 10, 0.85)';
    }
    lastScroll = scrollY;
  }, { passive: true });
})();

/* ---------- FAQ Accordion ---------- */
(function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      faqItems.forEach((otherItem) => {
        const otherBtn = otherItem.querySelector('.faq-question');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        otherBtn.setAttribute('aria-expanded', 'false');
        otherAnswer.hidden = true;
      });

      // Toggle clicked
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.hidden = false;

        // Subtle animation
        answer.style.animation = 'fadeSlideIn 0.25s ease';
        setTimeout(() => { answer.style.animation = ''; }, 260);
      }
    });
  });
})();

/* ---------- Ticker duplicate (ensure seamless loop) ---------- */
(function () {
  const tracks = document.querySelectorAll('.ticker-track');
  tracks.forEach((track) => {
    // Clone for seamless loop
    const clone = track.cloneNode(true);
    track.parentElement.appendChild(clone);
  });
})();

/* ---------- Scroll-triggered fade-in animations ---------- */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  const animated = document.querySelectorAll(
    '.card, .feature-card, .metric-item, .process-step, .pricing-card, .testimonial-card, .faq-item'
  );

  animated.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${(i % 4) * 0.1}s, transform 0.5s ease ${(i % 4) * 0.1}s`;
    observer.observe(el);
  });

  // When visible class added, apply visible styles
  const style = document.createElement('style');
  style.textContent = `
    .card.visible,
    .feature-card.visible,
    .metric-item.visible,
    .process-step.visible,
    .pricing-card.visible,
    .testimonial-card.visible,
    .faq-item.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
})();

/* ---------- FAQ answer animation keyframe ---------- */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
})();
