// marin.js - Animated Reveal for Marin’s Issue Page

document.addEventListener("DOMContentLoaded", () => {
  revealMarinContent(".marin-section h2, .marin-section h3, .marin-section p, .marin-fact", 140);
});

/**
 * Animates local issue content with staggered entrance
 * @param {string} selector - Items to animate
 * @param {number} delay - Stagger time in ms
 */
function revealMarinContent(selector, delay = 140) {
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
