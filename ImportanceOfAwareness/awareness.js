// awareness.js - Animate Awareness page content

document.addEventListener("DOMContentLoaded", () => {
  animateElements(".awareness-section h2, .awareness-section h3, .awareness-section p, .awareness-callout", 130);
});

/**
 * Animate multiple elements with staggered fade-up effect
 * @param {string} selector - CSS selector string
 * @param {number} delay - Delay between animations in ms
 */
function animateElements(selector, delay = 130) {
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
