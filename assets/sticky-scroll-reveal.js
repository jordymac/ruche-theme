/**
 * Sticky Scroll Reveal
 * Handles scroll-triggered crossfade animations between image/text pairs
 */

class StickyScrollReveal {
  constructor(section) {
    this.section = section;
    this.textBlocks = Array.from(section.querySelectorAll('.sticky-scroll-reveal__text-block'));
    this.imageWrappers = Array.from(section.querySelectorAll('.sticky-scroll-reveal__image-wrapper'));
    this.currentIndex = 0;
    this.isScrolling = false;
    this.scrollTimeout = null;
    this.hasEntered = false;
    this.enteredTime = 0;
    this.isProgrammaticScroll = false;
    this.isExiting = false;

    // Only initialize on desktop
    if (window.innerWidth >= 750) {
      this.init();
      this.setupScrollControl();
    }

    // Reinitialize on resize if crossing breakpoint
    this.handleResize = this.debounce(() => {
      const isDesktop = window.innerWidth >= 750;
      if (isDesktop && !this.observer) {
        this.init();
        this.setupScrollControl();
      } else if (!isDesktop && this.observer) {
        this.destroy();
      }
    }, 250);

    window.addEventListener('resize', this.handleResize);
  }

  setupScrollControl() {
    let lastScrollTime = 0;
    const scrollCooldown = 1500; // 1.5 seconds between scrolls
    const DEBUG = false; // Set to true only for debugging - improves performance in production

    const handleWheel = (e) => {
      // Ignore wheel events during programmatic scrolling
      if (this.isProgrammaticScroll) {
        e.preventDefault();
        return;
      }

      const now = Date.now();
      const rect = this.section.getBoundingClientRect();
      const scrollingDown = e.deltaY > 0;

      // Check if section is in viewport
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isVisible) {
        if (DEBUG) console.log('🚫 Outside section - resetting');
        this.hasEntered = false;
        this.isExiting = false;
        return;
      }

      // If we're in exit mode, check if user changed direction - re-engage if so
      if (this.isExiting) {
        const wasScrollingDown = this.lastScrollDirection === 'down';
        const isScrollingDown = scrollingDown;

        // If direction changed while exiting, re-engage
        if (wasScrollingDown !== isScrollingDown) {
          if (DEBUG) console.log('🔄 Direction changed during exit - re-engaging');
          this.isExiting = false;
        } else {
          if (DEBUG) console.log('🚪 Exiting section - allowing natural scroll');
          return;
        }
      }

      this.lastScrollDirection = scrollingDown ? 'down' : 'up';

      // Allow entry scroll - don't intercept until we've entered and settled on segment 0
      if (!this.hasEntered) {
        if (DEBUG) console.log('⏭️  Entry phase - allowing natural scroll', {
          rectTop: Math.round(rect.top),
          currentIndex: this.currentIndex
        });

        // Mark as entered when first text block is in position
        const firstBlockRect = this.textBlocks[0].getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;

        // Check if first block is centered (within 20% of viewport center)
        const isFirstBlockCentered = Math.abs(firstBlockRect.top + firstBlockRect.height / 2 - viewportCenter) < window.innerHeight * 0.2;

        if (rect.top <= window.innerHeight * 0.5 && isFirstBlockCentered) {
          if (DEBUG) console.log('✅ Entering section - hasEntered set to true');
          this.hasEntered = true;
          this.enteredTime = now;
          this.currentIndex = 0;
          this.activateBlock(0, true); // Ensure first block is active
          return;
        } else {
          return; // Still entering, allow natural scroll
        }
      }

      // Grace period after entering - allow settling before navigation
      if (now - this.enteredTime < 500) {
        if (DEBUG) console.log('⏳ Entry grace period - allowing natural scroll');
        return;
      }

      // At boundaries - allow scroll out
      if (scrollingDown && this.currentIndex >= this.textBlocks.length - 1) {
        if (DEBUG) console.log('⬇️ At last segment - allowing exit down');
        this.isExiting = true;
        return; // Allow scroll out bottom
      }

      if (!scrollingDown && this.currentIndex <= 0) {
        if (DEBUG) console.log('⬆️ At first segment - allowing exit up');
        this.isExiting = true;
        return; // Allow scroll out top
      }

      // Cooldown check for segment navigation
      if (now - lastScrollTime < scrollCooldown) {
        if (DEBUG) console.log('⏸️  Cooldown active - prevented');
        e.preventDefault();
        return;
      }

      // Navigate between segments
      let targetIndex = this.currentIndex;

      if (scrollingDown && this.currentIndex < this.textBlocks.length - 1) {
        targetIndex = this.currentIndex + 1;
      } else if (!scrollingDown && this.currentIndex > 0) {
        targetIndex = this.currentIndex - 1;
      }

      if (DEBUG) console.log('🎯 Navigating:', {
        from: this.currentIndex,
        to: targetIndex,
        direction: scrollingDown ? 'down' : 'up'
      });

      e.preventDefault();
      lastScrollTime = now;

      // Set flag to ignore wheel events during smooth scroll
      this.isProgrammaticScroll = true;

      // Scroll to target block
      this.textBlocks[targetIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      // Update active state
      this.activateBlock(targetIndex);

      // Clear flag after scroll animation completes (smooth scroll takes ~500-800ms)
      setTimeout(() => {
        this.isProgrammaticScroll = false;
      }, 1000);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
  }

  init() {
    this.setupObserver();
  }

  setupObserver() {
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Only use observer when wheel control is NOT active
        if (this.hasEntered) return;

        const index = parseInt(entry.target.dataset.index);

        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          // Skip transition for first block on initial entry
          const skipTransition = index === 0 && !this.hasEntered;
          this.activateBlock(index, skipTransition);
        }
      });
    }, options);

    // Observe all text blocks
    this.textBlocks.forEach((block) => {
      this.observer.observe(block);
    });
  }

  activateBlock(index, skipTransition = false) {
    if (index === this.currentIndex && !skipTransition) return;

    // Use requestAnimationFrame for smooth animation updates
    requestAnimationFrame(() => {
      // Update text blocks
      this.textBlocks.forEach((block, i) => {
        // Temporarily disable transitions for instant activation
        if (skipTransition && i === index) {
          block.style.transition = 'none';
        }

        block.classList.remove('is-active', 'is-past');

        if (i === index) {
          block.classList.add('is-active');
        } else if (i < index) {
          block.classList.add('is-past');
        }

        // Re-enable transitions after a frame
        if (skipTransition && i === index) {
          requestAnimationFrame(() => {
            block.style.transition = '';
          });
        }
      });

      // Update images - use will-change hint for GPU acceleration
      this.imageWrappers.forEach((wrapper, i) => {
        wrapper.classList.toggle('is-active', i === index);
      });

      this.currentIndex = index;
    });
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
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

// Initialize all sticky scroll reveal sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.sticky-scroll-reveal');
  sections.forEach((section) => {
    new StickyScrollReveal(section);
  });
});
