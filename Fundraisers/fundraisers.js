// fundraisers.js - Staggered Fundraiser Reveal

document.addEventListener("DOMContentLoaded", () => {
  animateFundraiserContent(".fundraisers-section h2, .fundraisers-section h3, .fundraisers-section p, .fundraiser-card", 150);
});

/**
 * Fades in fundraiser elements with staggered animation
 * @param {string} selector - Items to animate
 * @param {number} delay - Milliseconds between each animation step
 */
function animateFundraiserContent(selector, delay = 150) {
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
