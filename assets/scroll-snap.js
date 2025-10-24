/**
 * Global Section Scroll Snap Observer
 * Monitors and logs scroll snap behavior for debugging
 */

class ScrollSnapMonitor {
  constructor() {
    this.DEBUG = true; // Set to false to disable logging
    this.currentSection = null;
    this.headerHeight = 0;
    this.sections = [];
    this.isInitialLoad = true;
    this.insideStickyScrollSection = false;

    // Only initialize on desktop
    if (window.innerWidth >= 750) {
      this.init();
    }

    // Reinitialize on resize if crossing breakpoint
    this.handleResize = this.debounce(() => {
      const isDesktop = window.innerWidth >= 750;
      if (isDesktop && !this.observer) {
        this.init();
      } else if (!isDesktop && this.observer) {
        this.destroy();
      }
    }, 250);

    window.addEventListener('resize', this.handleResize);
  }

  init() {
    if (this.DEBUG) console.log('🎯 Scroll Snap Monitor: Initializing');

    this.sections = Array.from(document.querySelectorAll('.shopify-section'));
    this.updateHeaderHeight();
    this.setupObserver();
    this.setupScrollListener();
    this.setupHeaderObserver();

    if (this.DEBUG) {
      console.log('📄 Sections found:', this.sections.length);
    }
  }

  updateHeaderHeight() {
    const headerHeight = getComputedStyle(document.documentElement)
      .getPropertyValue('--header-height');
    this.headerHeight = parseInt(headerHeight) || 80;

    if (this.DEBUG && this.isInitialLoad) {
      const rawValue = headerHeight.trim();
      console.log('📏 Header height read from CSS var:', {
        raw: rawValue,
        parsed: this.headerHeight + 'px',
        note: 'includes header + padding'
      });
      this.isInitialLoad = false;
    }
  }

  setupHeaderObserver() {
    // Watch for header height changes
    const header = document.querySelector('.shopify-section-group-header-group');
    if (!header) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const oldHeight = this.headerHeight;
      this.updateHeaderHeight();

      if (oldHeight !== this.headerHeight && this.DEBUG) {
        console.log('📏 Header height changed:', {
          from: oldHeight,
          to: this.headerHeight
        });
      }
    });

    resizeObserver.observe(header);
  }

  setupObserver() {
    const options = {
      root: null,
      rootMargin: `-${this.headerHeight}px 0px -50% 0px`,
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionIndex = this.sections.indexOf(entry.target);
        const sectionId = entry.target.id || `section-${sectionIndex}`;
        const isStickyScrollSection = entry.target.querySelector('.sticky-scroll-reveal') !== null;
        const sectionHeight = entry.target.offsetHeight;
        const isShortSection = sectionHeight < window.innerHeight * 0.5; // Less than 50vh

        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          // Section is visible and likely snapped
          if (this.currentSection !== entry.target) {
            this.currentSection = entry.target;

            // Track if we're inside sticky scroll section
            if (isStickyScrollSection) {
              this.insideStickyScrollSection = true;
              if (this.DEBUG) {
                console.log('🎨 Sticky scroll reveal section entered - using internal scroll control');
              }
            } else {
              this.insideStickyScrollSection = false;
              if (this.DEBUG) {
                console.log('📍 Section snap detected:', {
                  section: sectionId,
                  index: sectionIndex,
                  intersectionRatio: entry.intersectionRatio.toFixed(2),
                  boundingTop: Math.round(entry.boundingClientRect.top),
                  headerHeight: this.headerHeight,
                  sectionHeight: sectionHeight + 'px',
                  isShort: isShortSection,
                  viewportHeight: window.innerHeight + 'px'
                });
              }
            }
          }
        }
      });
    }, options);

    // Observe all sections
    this.sections.forEach((section) => {
      this.observer.observe(section);
    });
  }

  setupScrollListener() {
    let scrollTimeout;
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        // Scroll has settled, likely snapped to a section
        if (this.DEBUG && !this.insideStickyScrollSection) {
          const scrolledDistance = Math.abs(currentScrollY - lastScrollY);
          if (scrolledDistance > 50) {
            console.log('✅ Scroll settled:', {
              direction,
              scrollY: Math.round(currentScrollY),
              distance: Math.round(scrolledDistance)
            });
          }
        }
        lastScrollY = currentScrollY;
      }, 150);
    }, { passive: true });
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.DEBUG) console.log('🛑 Scroll Snap Monitor: Destroyed');
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ScrollSnapMonitor();
});
