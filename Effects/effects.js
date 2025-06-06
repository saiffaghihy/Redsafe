// effects.js - Animated Reveal for Effects Page

document.addEventListener("DOMContentLoaded", () => {
  animateEffects(".effects-section h2, .effects-section h3, .effects-section p, .effect-callout", 150);
});

/**
 * Animates effect descriptions to appear with staggered timing
 * @param {string} selector - Elements to animate
 * @param {number} delay - Delay between animations in ms
 */
function animateEffects(selector, delay = 150) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = `opacity 0.6s ease ${index * delay}ms, transform 0.6s ease ${index * delay}ms`;

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 100);
  });
}
