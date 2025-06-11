// causes.js - Animate Causes page content on load

document.addEventListener("DOMContentLoaded", () => {
  animateElements(".causes-section h2, .causes-section h3, .causes-section p, .causes-callout", 120);
});

/**
 * Animate multiple elements with staggered fade-up effect
 * @param {string} selector - CSS selector string for elements
 * @param {number} delay - Delay between animations in milliseconds
 */
function animateElements(selector, delay = 120) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.6s ease ${index * delay}ms, transform 0.6s ease ${index * delay}ms`;

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 100);
  });
}
