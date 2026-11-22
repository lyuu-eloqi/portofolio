/**
 * Personal Portfolio - Lyuu Eloqi, S.Kom.
 * Vanilla JavaScript Implementation
 * 
 * Features:
 * - Accessible mobile menu drawer (ARIA & keyboard control)
 * - Header shadow on scroll
 * - Active navigation scroll-spy
 * - Back to top interaction
 * - Non-intrusive placeholder link toast notifications
 */

(function () {
  'use strict';

  // DOM Elements
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNavDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileNavBackdrop = document.querySelector('.mobile-nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  const placeholderLinks = document.querySelectorAll('[data-placeholder]');
  const toastContainer = document.querySelector('.toast-container');
  const toast = document.querySelector('.toast');

  // CV Preview Modal Elements
  const cvModal = document.getElementById('cv-preview-modal');
  const cvPdfFrame = document.getElementById('cv-pdf-frame');
  const cvModalCloseBtn = document.querySelector('.cv-modal-close-btn');
  const previewCvButtons = document.querySelectorAll('.btn-preview-cv');
  let lastActiveElementBeforeModal = null;

  let toastTimeout = null;

  /* --------------------------------------------------------------------------
     1. Header State on Scroll
     -------------------------------------------------------------------------- */
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  /* --------------------------------------------------------------------------
     2. Mobile Navigation Drawer & A11y
     -------------------------------------------------------------------------- */
  function openMobileNav() {
    if (!navToggle || !mobileNavDrawer) return;
    navToggle.setAttribute('aria-expanded', 'true');
    mobileNavDrawer.classList.add('is-open');
    if (mobileNavBackdrop) {
      mobileNavBackdrop.classList.add('is-visible');
    }
    document.body.style.overflow = 'hidden';

    // Focus the first link in drawer
    const firstLink = mobileNavDrawer.querySelector('a');
    if (firstLink) {
      firstLink.focus();
    }
  }

  function closeMobileNav() {
    if (!navToggle || !mobileNavDrawer) return;
    navToggle.setAttribute('aria-expanded', 'false');
    mobileNavDrawer.classList.remove('is-open');
    if (mobileNavBackdrop) {
      mobileNavBackdrop.classList.remove('is-visible');
    }
    document.body.style.overflow = '';
  }

  function toggleMobileNav() {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleMobileNav);
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileNav);
  }

  // Close drawer or modal on ESC key
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (cvModal && cvModal.classList.contains('is-open')) {
        closeCvModal();
      } else if (mobileNavDrawer && mobileNavDrawer.classList.contains('is-open')) {
        closeMobileNav();
        if (navToggle) navToggle.focus();
      }
    }
  });

  // Close drawer when clicking any link
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (mobileNavDrawer && mobileNavDrawer.classList.contains('is-open')) {
        closeMobileNav();
      }
    });
  });

  /* --------------------------------------------------------------------------
     3. CV PDF Preview Modal
     -------------------------------------------------------------------------- */
  function openCvModal() {
    if (!cvModal) return;
    lastActiveElementBeforeModal = document.activeElement;

    // Load PDF source on demand if not set yet
    if (cvPdfFrame && (!cvPdfFrame.getAttribute('src') || cvPdfFrame.getAttribute('src') === '')) {
      cvPdfFrame.setAttribute('src', 'assets/documents/cv_resmi.pdf#toolbar=1&navpanes=0');
    }

    cvModal.setAttribute('aria-hidden', 'false');
    cvModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Focus close button or primary action
    if (cvModalCloseBtn) {
      setTimeout(function () {
        cvModalCloseBtn.focus();
      }, 100);
    }
  }

  function closeCvModal() {
    if (!cvModal) return;
    cvModal.setAttribute('aria-hidden', 'true');
    cvModal.classList.remove('is-open');
    document.body.style.overflow = '';

    if (lastActiveElementBeforeModal && typeof lastActiveElementBeforeModal.focus === 'function') {
      lastActiveElementBeforeModal.focus();
    }
  }

  previewCvButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      // If mobile drawer is open, close it first
      if (mobileNavDrawer && mobileNavDrawer.classList.contains('is-open')) {
        closeMobileNav();
      }
      openCvModal();
    });
  });

  if (cvModalCloseBtn) {
    cvModalCloseBtn.addEventListener('click', closeCvModal);
  }

  if (cvModal) {
    cvModal.addEventListener('click', function (e) {
      // Close when clicking directly on the backdrop (outside container)
      if (e.target === cvModal) {
        closeCvModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. Active Navigation Scroll-Spy (IntersectionObserver)
     -------------------------------------------------------------------------- */
  function initScrollSpy() {
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            const href = link.getAttribute('href');
            if (href === '#' + id) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            } else if (href && href.startsWith('#')) {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* --------------------------------------------------------------------------
     4. Back to Top Button
     -------------------------------------------------------------------------- */
  function handleBackToTop() {
    if (!backToTopBtn) return;
    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. Placeholder Link Notification (Toast)
     -------------------------------------------------------------------------- */
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastTimeout = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 3800);
  }

  placeholderLinks.forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      const customMsg = element.getAttribute('data-placeholder-message') ||
        'Tautan ini merupakan placeholder. Silakan lengkapi dengan URL resmi Anda di index.html.';
      showToast(customMsg);
    });
  });

  /* --------------------------------------------------------------------------
     6. Event Listeners Initialization
     -------------------------------------------------------------------------- */
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  window.addEventListener('DOMContentLoaded', function () {
    handleHeaderScroll();
    initScrollSpy();
    handleBackToTop();
  });

})();
