/**
 * Product Showcase - Hover Video Functionality
 * Handles lazy loading and playback of videos on hover (desktop only)
 */

class ProductShowcaseVideo {
  constructor() {
    this.isDesktop = window.matchMedia('(min-width: 990px)').matches;

    if (!this.isDesktop) return; // Only initialize on desktop

    this.videoWrappers = document.querySelectorAll('.product-showcase__image-wrapper.has-video');
    this.init();
  }

  init() {
    this.videoWrappers.forEach(wrapper => {
      const video = wrapper.querySelector('.product-showcase__video');
      if (!video) return;

      // Handle video loading errors - fallback to image zoom
      video.addEventListener('error', () => {
        console.warn('Video failed to load, falling back to image zoom');
        wrapper.classList.remove('has-video');
        wrapper.classList.add('has-image-only');
      });

      // Play video on hover
      const playVideo = () => {
        // Check if video can play
        if (video.readyState >= 2) { // HAVE_CURRENT_DATA or better
          wrapper.classList.add('video-playing');
          video.play().catch(err => {
            console.warn('Video play failed:', err);
            wrapper.classList.remove('video-playing');
          });
        } else {
          // Wait for video to load
          const onCanPlay = () => {
            if (wrapper.matches(':hover')) {
              wrapper.classList.add('video-playing');
              video.play().catch(err => {
                console.warn('Video play failed:', err);
                wrapper.classList.remove('video-playing');
              });
            }
          };
          video.addEventListener('canplay', onCanPlay, { once: true });
          video.load(); // Start loading if not already
        }
      };

      // Pause video when hover ends
      const pauseVideo = () => {
        wrapper.classList.remove('video-playing');
        video.pause();
        video.currentTime = 0; // Reset to start
      };

      // Attach hover events
      wrapper.addEventListener('mouseenter', playVideo);
      wrapper.addEventListener('mouseleave', pauseVideo);
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ProductShowcaseVideo();
  });
} else {
  new ProductShowcaseVideo();
}

// Reinitialize on window resize (if crossing desktop threshold)
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    new ProductShowcaseVideo();
  }, 250);
});
