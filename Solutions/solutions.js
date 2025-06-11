// solutions.js - Animate Solutions page content

document.addEventListener("DOMContentLoaded", () => {
  animateElements(".solutions-section h2, .solutions-section h3, .solutions-section p, .solution-step", 150);
});

/**
 * Animate multiple elements with staggered fade-up effect
 * @param {string} selector - CSS selector string
 * @param {number} delay - Delay between animations in ms
 */
function animateElements(selector, delay = 150) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(25px)";
    el.style.transition = `opacity 0.6s ease ${index * delay}ms, transform 0.6s ease ${index * delay}ms`;

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 100);
  });
}
