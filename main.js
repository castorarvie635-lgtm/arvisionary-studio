// ── NAV SCROLL BEHAVIOR ──
const nav = document.getElementById('nav');

if (nav) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -32px 0px'
});

document.querySelectorAll('.r').forEach(function(el) {
  revealObserver.observe(el);
});
