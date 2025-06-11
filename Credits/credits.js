// credits.js - Animated reveal for Credits page

document.addEventListener("DOMContentLoaded", () => {
  animateElements(".credits-section h2, .credits-section p, .credit-box", 180);
});

/**
 * Animate elements with a staggered fade-up effect
 * @param {string} selector - CSS selector for target elements
 * @param {number} delay - Delay in ms between each animation step
 */
function animateElements(selector, delay = 180) {
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
