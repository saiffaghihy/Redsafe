// actions.js - Animate Action Steps on Scroll

document.addEventListener("DOMContentLoaded", () => {
  fadeInSteps(".actions-section h2, .actions-section p, .actions-section ul li", 150);
});

/**
 * Animates each action item with a staggered fade-in
 * @param {string} selector - Element group to animate
 * @param {number} delay - Time between fades in ms
 */
function fadeInSteps(selector, delay = 150) {
  const items = document.querySelectorAll(selector);

  items.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(25px)";
    item.style.transition = `opacity 0.6s ease ${index * delay}ms, transform 0.6s ease ${index * delay}ms`;

    setTimeout(() => {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, 100);
  });
}
