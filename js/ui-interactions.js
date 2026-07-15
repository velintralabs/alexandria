/* === UI INTERACTION ENHANCEMENTS === */

(function () {
  "use strict";

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Enhanced Intersection Observer for reveal animations
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    document.querySelectorAll('.reveal').forEach(function(el) {
      revealObserver.observe(el);
    });
  }

  // Smooth parallax effect for hero section
  var hero = document.querySelector('.hero');
  if (hero) {
    var heroBg = hero.querySelector('.hero-bg');
    if (heroBg) {
      window.addEventListener('scroll', function() {
        var scrolled = window.pageYOffset;
        var rate = scrolled * 0.5;
        heroBg.style.transform = 'translateY(' + rate + 'px)';
      }, { passive: true });
    }
  }

  // Enhanced property card interactions
  document.querySelectorAll('.prop-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Smooth form input focus effects
  document.querySelectorAll('.field input, .field select, .field textarea').forEach(function(input) {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('field-focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('field-focused');
    });
  });

  // Enhanced FAQ accordion with smooth transitions
  document.querySelectorAll('.faq-q').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = this.parentElement;
      var answer = item.querySelector('.faq-a');
      var isOpen = item.classList.contains('open');
      
      // Close all other items
      document.querySelectorAll('.faq-item').forEach(function(otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          var otherAnswer = otherItem.querySelector('.faq-a');
          if (otherAnswer) {
            otherAnswer.style.maxHeight = '0';
          }
        }
      });
      
      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Smooth scroll progress indicator
  var progressBar = document.createElement('div');
  progressBar.style.cssText = 'position:fixed;top:0;left:0;width:0;height:3px;background:linear-gradient(90deg,#c8a96b,#e0c48a);z-index:9999;transition:width 0.3s ease;';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  }, { passive: true });

  // Enhanced mobile menu with smooth transitions
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav') || document.querySelector('.mobile-nav');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      var isOpen = mobileNav.classList.contains('open');
      if (!isOpen) {
        mobileNav.style.display = 'flex';
        setTimeout(function() {
          mobileNav.classList.add('open');
        }, 10);
      } else {
        mobileNav.classList.remove('open');
        setTimeout(function() {
          mobileNav.style.display = 'none';
        }, 300);
      }
    });
  }

  // Smooth language toggle animation
  document.querySelectorAll('.lang-toggle button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var allBtns = document.querySelectorAll('.lang-toggle button');
      allBtns.forEach(function(b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
    });
  });

  // Enhanced property filter with smooth transitions
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var filter = this.getAttribute('data-filter');
      var cards = document.querySelectorAll('.prop-card');
      
      // Update active button
      document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
      
      // Filter cards with animation
      cards.forEach(function(card) {
        var category = card.getAttribute('data-category') || '';
        var shouldShow = filter === 'all' || category.indexOf(filter) !== -1;
        
        if (shouldShow) {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
          card.style.display = '';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(function() {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Smooth calculator interactions
  document.querySelectorAll('.calc-field input[type="range"]').forEach(function(slider) {
    slider.addEventListener('input', function() {
      var value = this.value;
      var min = this.min;
      var max = this.max;
      var percentage = ((value - min) / (max - min)) * 100;
      
      // Update slider track color
      this.style.background = 'linear-gradient(to right, #c8a96b 0%, #c8a96b ' + percentage + '%, rgba(255,255,255,0.16) ' + percentage + '%, rgba(255,255,255,0.16) 100%)';
    });
    
    // Initialize slider colors
    slider.dispatchEvent(new Event('input'));
  });

  // Enhanced WhatsApp button interaction
  var whatsappBtn = document.querySelector('.float-wa');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.1)';
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  }

  // Smooth scroll to top when clicking logo
  var logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', function(e) {
      if (this.getAttribute('href') === 'index.html' || this.getAttribute('href') === './') {
        // Only smooth scroll if we're on the same page
        if (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')) {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    });
  }

  // Enhanced form validation feedback
  document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      var isValid = true;
      var requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#ff4444';
          field.style.boxShadow = '0 0 0 2px rgba(255,68,68,0.3)';
          
          // Remove error styling after user starts typing
          field.addEventListener('input', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
          }, { once: true });
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        // Scroll to first invalid field
        var firstInvalid = form.querySelector('[required]:invalid');
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
          firstInvalid.focus();
        }
      }
    });
  });

  // Smooth reveal for sections on scroll
  var sections = document.querySelectorAll('.section');
  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    sections.forEach(function(section) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      sectionObserver.observe(section);
    });
  }

  // Enhanced header scroll behavior
  var header = document.querySelector('.site-header');
  if (header) {
    var lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      var currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.classList.add('scrolled');
        header.classList.add('is-deep');
      } else {
        header.classList.remove('is-deep');
      }
      
      // Hide header on scroll down, show on scroll up
      if (currentScroll > lastScroll && currentScroll > 200) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
    
    // Add transition to header
    header.style.transition = 'transform 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease';
  }

  // Smooth image loading with fade-in effect
  document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
      this.style.transform = 'scale(1)';
    });
    
    // Set initial styles
    if (!img.complete) {
      img.style.opacity = '0';
      img.style.transform = 'scale(0.95)';
      img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }
  });

  // Enhanced property card image zoom on hover
  document.querySelectorAll('.prop-media img').forEach(function(img) {
    var card = img.closest('.prop-card');
    if (card) {
      card.addEventListener('mouseenter', function() {
        img.style.transform = 'scale(1.1)';
        img.style.filter = 'brightness(1.1)';
      });
      
      card.addEventListener('mouseleave', function() {
        img.style.transform = 'scale(1)';
        img.style.filter = 'brightness(1)';
      });
    }
  });

  // Smooth service card interactions
  document.querySelectorAll('.svc-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
      this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '';
    });
  });

  // Enhanced agent card hover effects
  document.querySelectorAll('.agent-card').forEach(function(card) {
    var photo = card.querySelector('.agent-photo img');
    if (photo) {
      card.addEventListener('mouseenter', function() {
        photo.style.transform = 'scale(1.05)';
      });
      
      card.addEventListener('mouseleave', function() {
        photo.style.transform = 'scale(1)';
      });
    }
  });

  // Smooth quote card interactions
  document.querySelectorAll('.quote-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-6px)';
      this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '';
    });
  });

  // Enhanced process step interactions
  document.querySelectorAll('.process-step').forEach(function(step) {
    step.addEventListener('mouseenter', function() {
      var num = this.querySelector('.num');
      if (num) {
        num.style.color = '#c8a96b';
        num.style.transform = 'scale(1.1)';
      }
    });
    
    step.addEventListener('mouseleave', function() {
      var num = this.querySelector('.num');
      if (num) {
        num.style.color = 'rgba(255,255,255,0.12)';
        num.style.transform = 'scale(1)';
      }
    });
  });

  // Smooth footer link hover effects
  document.querySelectorAll('.footer-col a').forEach(function(link) {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(4px)';
      this.style.color = '#fff';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
      this.style.color = '';
    });
  });

  // Enhanced social icon interactions
  document.querySelectorAll('.socials a').forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) rotate(5deg)';
      this.style.borderColor = '#c8a96b';
      this.style.color = '#c8a96b';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) rotate(0)';
      this.style.borderColor = '';
      this.style.color = '';
    });
  });

  // Smooth language toggle interactions
  document.querySelectorAll('.lang-toggle button').forEach(function(btn) {
    btn.addEventListener('mouseenter', function() {
      if (!this.classList.contains('active')) {
        this.style.color = '#fff';
        this.style.background = 'rgba(255,255,255,0.1)';
      }
    });
    
    btn.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.color = '';
        this.style.background = '';
      }
    });
  });

  // Enhanced form field interactions
  document.querySelectorAll('.field').forEach(function(field) {
    var input = field.querySelector('input, select, textarea');
    if (input) {
      input.addEventListener('focus', function() {
        field.style.transform = 'translateY(-2px)';
      });
      
      input.addEventListener('blur', function() {
        field.style.transform = 'translateY(0)';
      });
    }
  });

  // Smooth calculator result interactions
  document.querySelectorAll('.calc-result').forEach(function(result) {
    result.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
    });
    
    result.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '';
    });
  });

  // Enhanced detail item interactions
  document.querySelectorAll('.detail').forEach(function(detail) {
    detail.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(8px)';
      this.style.background = 'rgba(255,255,255,0.02)';
    });
    
    detail.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
      this.style.background = '';
    });
  });

  // Smooth map panel interactions
  var mapPanel = document.querySelector('.map-panel');
  if (mapPanel) {
    mapPanel.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
      this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
    });
    
    mapPanel.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '';
    });
  }

  // Enhanced RERA badge interactions
  var reraBadge = document.querySelector('.rera');
  if (reraBadge) {
    reraBadge.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
      this.style.background = 'rgba(200,169,107,0.1)';
      this.style.borderColor = '#c8a96b';
      this.style.boxShadow = '0 0 20px rgba(200,169,107,0.2)';
    });
    
    reraBadge.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.background = '';
      this.style.borderColor = '';
      this.style.boxShadow = '';
    });
  }

  // Smooth scroll indicator for hero section
  var heroSection = document.querySelector('.hero');
  if (heroSection) {
    var scrollIndicator = document.createElement('div');
    scrollIndicator.innerHTML = '<div style="width:30px;height:50px;border:2px solid rgba(255,255,255,0.5);border-radius:15px;position:relative;"><div style="width:4px;height:8px;background:#fff;border-radius:2px;position:absolute;top:8px;left:50%;transform:translateX(-50%);animation:scrollIndicator 2s infinite;"></div></div>';
    scrollIndicator.style.cssText = 'position:absolute;bottom:30px;left:50%;transform:translateX(-50%);z-index:10;opacity:0.7;cursor:pointer;';
    scrollIndicator.addEventListener('click', function() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
    heroSection.appendChild(scrollIndicator);
    
    // Add CSS animation for scroll indicator
    var style = document.createElement('style');
    style.textContent = '@keyframes scrollIndicator { 0% { opacity: 1; top: 8px; } 100% { opacity: 0; top: 24px; } }';
    document.head.appendChild(style);
  }

  // Enhanced mobile touch interactions
  if ('ontouchstart' in window) {
    document.querySelectorAll('.prop-card, .svc-card, .agent-card, .quote-card').forEach(function(card) {
      card.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.98)';
      }, { passive: true });
      
      card.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
      }, { passive: true });
    });
  }

  // Smooth loading animation for the page
  window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
  });

  // Set initial page load styles
  document.body.style.opacity = '0';
  document.body.style.transform = 'translateY(20px)';
  document.body.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

})();
