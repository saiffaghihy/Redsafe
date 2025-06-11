// help.js - Animate Help page content

document.addEventListener("DOMContentLoaded", () => {
  animateElements(".help-section h2, .help-section h3, .help-section p, .help-section ul li, .help-emergency", 100);
});

/**
 * Animate multiple elements with staggered fade-up effect
 * @param {string} selector - CSS selector string
 * @param {number} delay - Delay between each animation in ms
 */
function animateElements(selector, delay = 100) {
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
