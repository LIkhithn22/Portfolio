/* ================================================================
   SCRIPT.JS — Portfolio Interactions
   ================================================================ */

// ── TYPED TEXT EFFECT ──
const phrases = [
  'Software Engineer',
  'Data Engineer',
  'Cloud Engineer',
  'ML / AI Enthusiast',
  'Full-Stack Developer',
];
let phraseIdx = 0, charIdx = 0, isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeLoop() {
  const current = phrases[phraseIdx];
  if (isDeleting) {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
    setTimeout(typeLoop, 60);
  } else {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) { isDeleting = true; setTimeout(typeLoop, 1800); return; }
    setTimeout(typeLoop, 90);
  }
}
typeLoop();

// ── NAVBAR SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

function onScroll() {
  // Scrolled class
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active nav link
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger-btn');
hamburger.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

function addReveal(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

addReveal('.about-text');
addReveal('.about-card');
addReveal('.skill-category');
addReveal('.project-card');
addReveal('.timeline-item');
addReveal('.edu-card');
addReveal('.cert-card');
addReveal('.contact-card');
addReveal('.section-title');
addReveal('.section-tag');
addReveal('.contact-desc');

// ── COUNTER ANIMATION for stats ──
function animateCounter(el, target, suffix = '') {
  const duration = 1500;
  const start = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const val = startVal + (target - startVal) * eased;
    el.textContent = Number.isInteger(target)
      ? Math.round(val) + suffix
      : val.toFixed(2) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(document.getElementById('stat-projects'), 6, '+');
      animateCounter(document.getElementById('stat-skills'), 15, '+');
      animateCounter(document.getElementById('stat-gpa'), 3.9);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsEl = document.getElementById('hero-stats');
if (statsEl) statsObserver.observe(statsEl);

// ── SMOOTH SECTION HIGHLIGHT (background shift) ──
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    projectCards.forEach(c => {
      if (c !== card) c.style.opacity = '0.6';
    });
  });
  card.addEventListener('mouseleave', () => {
    projectCards.forEach(c => c.style.opacity = '1');
  });
});

// ── PARALLAX on orbs (subtle) ──
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  const orb1 = document.querySelector('.orb-1');
  const orb2 = document.querySelector('.orb-2');
  const orb3 = document.querySelector('.orb-3');
  if (orb1) orb1.style.transform = `translate(${x * 20}px, ${y * 15}px)`;
  if (orb2) orb2.style.transform = `translate(${-x * 15}px, ${-y * 10}px)`;
  if (orb3) orb3.style.transform = `translate(${x * 10}px, ${y * 20}px)`;
});

// ── SKILL PILL RIPPLE ──
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', (e) => {
    pill.style.transform = 'scale(0.95)';
    setTimeout(() => pill.style.transform = '', 150);
  });
});

console.log('%c👋 Hi there! Portfolio by Likhith Nattuva', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%c📧 likhith2201@gmail.com', 'color: #a5b4fc; font-size: 13px;');

// ── CONTACT FORM (Netlify Forms AJAX) ──
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('form-submit-btn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(contactForm)).toString(),
      });

      if (res.ok) {
        formStatus.textContent = '✓ Message sent! I\'ll get back to you soon.';
        formStatus.classList.add('form-status--success');
        contactForm.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch {
      formStatus.textContent = '✗ Something went wrong. Please email me directly.';
      formStatus.classList.add('form-status--error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}
