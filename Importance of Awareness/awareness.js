// awareness.js - Animated Reveal for Awareness Page

document.addEventListener("DOMContentLoaded", () => {
  revealAwarenessContent(".awareness-section h2, .awareness-section h3, .awareness-section p, .awareness-callout", 130);
});

/**
 * Animates awareness-related elements to emphasize impact
 * @param {string} selector - Content to animate
 * @param {number} delay - Time between reveals in ms
 */
function revealAwarenessContent(selector, delay = 130) {
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
