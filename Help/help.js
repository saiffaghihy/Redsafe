// help.js - Animated Hotline & Support Reveal

document.addEventListener("DOMContentLoaded", () => {
  revealHelpResources(".help-section h2, .help-section h3, .help-section p, .help-section ul li, .help-emergency", 100);
});

/**
 * Fade in hotline and support content for clarity and calm
 * @param {string} selector - All elements to animate
 * @param {number} delay - Delay between items in ms
 */
function revealHelpResources(selector, delay = 100) {
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
