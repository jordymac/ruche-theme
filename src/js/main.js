import Alpine from 'alpinejs';
import { Swiper, Navigation, Pagination } from 'swiper';
import 'lazysizes';

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.start();

// Initialize Swiper with required modules
Swiper.use([Navigation, Pagination]);

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('Ruche theme loaded');

  // Initialize any global components here
  initializeGlobalComponents();
});

function initializeGlobalComponents() {
  // Add any global initialization logic
}