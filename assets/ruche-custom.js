/**
 * Ruche Custom JavaScript
 * Handles transparent navbar scroll behavior
 * Note: Header height is managed by the StickyHeader component in header.liquid
 */

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header-wrapper');

  if (!header) return;

  function handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Add white background immediately on any scroll for all pages
    if (scrollPosition > 0) {
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
