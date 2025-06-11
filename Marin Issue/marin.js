// marin.js - Animate Marin Issue page content

document.addEventListener("DOMContentLoaded", () => {
  animateElements(".marin-section h2, .marin-section h3, .marin-section p, .marin-fact", 140);
});

/**
 * Animate multiple elements with staggered fade-up effect
 * @param {string} selector - CSS selector string
 * @param {number} delay - Delay between animations in ms
 */
function animateElements(selector, delay = 140) {
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
