/**
 * Ruche Custom JavaScript
 * Handles transparent navbar behavior and sets header height
 */

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header-wrapper');
  const headerElement = document.querySelector('.header');
  const sectionHeader = document.querySelector('.section-header');
  const banner = document.querySelector('.banner');

  // Set header height CSS variable for sticky positioning
  function setHeaderHeight() {
    // Try multiple elements to find the actual header height
    let headerHeight = 0;

    if (headerElement && headerElement.offsetHeight > 0) {
      headerHeight = headerElement.offsetHeight;
      console.log('Using .header element, height:', headerHeight + 'px');
    } else if (header && header.offsetHeight > 0) {
      headerHeight = header.offsetHeight;
      console.log('Using .header-wrapper element, height:', headerHeight + 'px');
    } else if (sectionHeader && sectionHeader.offsetHeight > 0) {
      headerHeight = sectionHeader.offsetHeight;
      console.log('Using .section-header element, height:', headerHeight + 'px');
    } else {
      console.log('No header element found with height, using default 80px');
      headerHeight = 80;
    }

    // Add 1rem (16px) padding below header
    const headerWithPadding = headerHeight + 16;
    document.documentElement.style.setProperty('--header-height', `${headerWithPadding}px`);
  }

  // Set initial header height
  setHeaderHeight();

  // Also set it after short delays to ensure DOM is fully rendered
  setTimeout(setHeaderHeight, 100);
  setTimeout(setHeaderHeight, 500);

  // Update header height on resize
  window.addEventListener('resize', setHeaderHeight);

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
