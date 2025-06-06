// credits.js - Animated Recognition Reveal for Credits Page

document.addEventListener("DOMContentLoaded", () => {
  fadeInCredits(".credits-section p, .credit-box", 180);
});

/**
 * Reveal each credit or contributor block with a gentle fade and slide-up
 * @param {string} selector - Elements to animate
 * @param {number} delay - Stagger delay in ms
 */
function fadeInCredits(selector, delay = 180) {
  const items = document.querySelectorAll(selector);

  items.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(25px)";
    el.style.transition = `opacity 0.6s ease ${index * delay}ms, transform 0.6s ease ${index * delay}ms`;

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 80);
  });
}
