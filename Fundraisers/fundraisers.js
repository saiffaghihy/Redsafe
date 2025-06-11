// fundraisers.js - Animate Fundraisers page content

document.addEventListener("DOMContentLoaded", () => {
  animateElements(".fundraisers-section h2, .fundraisers-section h3, .fundraisers-section p, .fundraiser-card", 150);
});

/**
 * Animate multiple elements with staggered fade-up effect
 * @param {string} selector - CSS selector string
 * @param {number} delay - Delay between each animation in ms
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
