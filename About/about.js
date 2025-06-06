// about.js - Enhanced Interactivity for About Page

document.addEventListener("DOMContentLoaded", () => {
  animateTextStagger(".about-section p", 100);
});

/**
 * Animate paragraphs in staggered fade-in on load
 * @param {string} selector - The CSS selector for elements to animate
 * @param {number} delay - Delay between each element in ms
 */
function animateTextStagger(selector, delay = 100) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transition = `opacity 0.8s ease ${index * delay}ms`;
    setTimeout(() => {
      el.style.opacity = 1;
    }, 50);
  });
}
