/* ============================================================
   ALEXANDRIA REAL ESTATE — Interactions v2
   Clean, performant, no dependencies.
   ============================================================ */
(function() {
  'use strict';

  // --- Header scroll behaviour ---
  var header = document.getElementById('site-header');
  var hero = document.querySelector('.hero');

  function onScroll() {
    if (!header) return;
    var scrolled = window.scrollY > 40;
    var pastHero = hero && window.scrollY > hero.offsetHeight - 100;

    header.classList.toggle('scrolled', scrolled);
    if (pastHero) {
      header.classList.remove('hero-mode');
    } else {
      header.classList.add('hero-mode');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Hero loaded state ---
  if (hero) {
    setTimeout(function() { hero.classList.add('loaded'); }, 100);
  }

  // --- Mobile menu ---
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      var open = mobileNav.classList.toggle('open');
      menuToggle.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', open);
      mobileNav.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
        mobileNav.setAttribute('aria-hidden', true);
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
        mobileNav.setAttribute('aria-hidden', true);
        document.body.style.overflow = '';
      }
    });
  }

  // --- Scroll reveal ---
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(function(el) { obs.observe(el); });
  } else {
    reveals.forEach(function(el) { el.classList.add('visible'); });
  }

  // --- Investment explorer ---
  var areas = document.querySelectorAll('.explorer-area');
  var mapAreas = document.querySelectorAll('.map-area');

  areas.forEach(function(area) {
    area.addEventListener('click', function() {
      var id = this.getAttribute('data-area');
      areas.forEach(function(a) { a.classList.remove('active'); });
      mapAreas.forEach(function(m) { m.classList.remove('active'); });
      this.classList.add('active');
      var mapEl = document.querySelector('.map-area[data-area="' + id + '"]');
      if (mapEl) mapEl.classList.add('active');
    });
  });

  mapAreas.forEach(function(area) {
    area.addEventListener('click', function() {
      var id = this.getAttribute('data-area');
      areas.forEach(function(a) { a.classList.remove('active'); });
      mapAreas.forEach(function(m) { m.classList.remove('active'); });
      this.classList.add('active');
      var sidebarEl = document.querySelector('.explorer-area[data-area="' + id + '"]');
      if (sidebarEl) {
        sidebarEl.classList.add('active');
        sidebarEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Active nav on scroll ---
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    var scrollY = window.scrollY + 200;
    var current = '';
    sections.forEach(function(section) {
      if (scrollY >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      link.classList.toggle('active', href === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // --- WhatsApp button hover ---
  var waBtn = document.querySelector('.float-wa');
  if (waBtn) {
    waBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.05)';
      this.style.boxShadow = '0 12px 40px rgba(0,0,0,0.18)';
    });
    waBtn.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  }

  // --- Resize: close mobile nav ---
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1100 && mobileNav && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
      mobileNav.setAttribute('aria-hidden', true);
      document.body.style.overflow = '';
    }
  });

})();
