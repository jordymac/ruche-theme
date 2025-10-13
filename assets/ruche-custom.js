/**
 * Ruche Custom JavaScript
 * Handles transparent navbar behavior
 */

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header-wrapper');
  const banner = document.querySelector('.banner');

  if (!header || !banner) return;

  // Get banner height
  const bannerHeight = banner.offsetHeight;

  function handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Add class when scrolled past the hero section (with 100px buffer)
    if (scrollPosition > bannerHeight - 100) {
      header.classList.add('scrolled-past-hero');
      document.body.classList.add('scrolled-past-hero');
    } else {
      header.classList.remove('scrolled-past-hero');
      document.body.classList.remove('scrolled-past-hero');
    }
  }

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Initial check
  handleScroll();
});
