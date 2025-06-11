// us.js - Animate Us page content

document.addEventListener("DOMContentLoaded", () => {
  animateElements(".us-section h2, .us-section h3, .us-section p", 140);
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
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.6s ease ${index * delay}ms, transform 0.6s ease ${index * delay}ms`;

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 100);
  });
}
