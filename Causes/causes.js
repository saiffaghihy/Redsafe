// causes.js - Animated Content Reveal for Causes Page

document.addEventListener("DOMContentLoaded", () => {
  revealCauses(".causes-section h2, .causes-section h3, .causes-section p, .causes-callout", 120);
});

/**
 * Fades in cause-related elements in staggered fashion
 * @param {string} selector - Elements to animate
 * @param {number} delay - Time between fades in ms
 */
function revealCauses(selector, delay = 120) {
  const items = document.querySelectorAll(selector);

  items.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";
    item.style.transition = `opacity 0.6s ease ${index * delay}ms, transform 0.6s ease ${index * delay}ms`;

    setTimeout(() => {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, 100);
  });
}
