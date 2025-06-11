// unfiltered.js - Animate podcast episodes on Unfiltered page

document.addEventListener("DOMContentLoaded", () => {
  animateElements(".podcast-episode", 180);
});

/**
 * Animate multiple elements with staggered fade-up effect
 * @param {string} selector - CSS selector string for podcast episodes
 * @param {number} delay - Delay between animations in ms
 */
function animateElements(selector, delay = 180) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(25px)";
    el.style.transition = `opacity 0.7s ease ${index * delay}ms, transform 0.7s ease ${index * delay}ms`;

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 100);
  });
}
