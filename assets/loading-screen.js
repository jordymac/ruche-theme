/**
 * Loading Screen
 * Shows only once per session on first visit
 * Handles fade-out on page load
 */

(function() {
  'use strict';

  const loadingScreen = document.getElementById('loading-screen');

  if (!loadingScreen) return;

  // Check if loading screen has already been shown this session
  const hasShownLoadingScreen = sessionStorage.getItem('ruche-loading-screen-shown');

  if (hasShownLoadingScreen) {
    // Already shown this session - hide immediately
    loadingScreen.remove();
    return;
  }

  // Mark as shown for this session
  sessionStorage.setItem('ruche-loading-screen-shown', 'true');

  // Minimum display time for smooth UX (500ms)
  const minDisplayTime = 500;
  const startTime = performance.now();

  function hideLoadingScreen() {
    const elapsed = performance.now() - startTime;
    const remainingTime = Math.max(0, minDisplayTime - elapsed);

    setTimeout(() => {
      // Add hidden class to trigger fade-out
      loadingScreen.classList.add('loading-screen--hidden');

      // Remove from DOM after transition completes
      setTimeout(() => {
        loadingScreen.remove();
      }, 400); // Match CSS transition duration
    }, remainingTime);
  }

  // Hide when page is fully loaded
  if (document.readyState === 'complete') {
    hideLoadingScreen();
  } else {
    window.addEventListener('load', hideLoadingScreen);
  }
})();
