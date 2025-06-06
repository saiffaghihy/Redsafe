// us.js - Interactive Profile Reveal for Us Page

document.addEventListener("DOMContentLoaded", () => {
  staggerFadeIn(".us-profile", 200);
});

/**
 * Fade in profile blocks one by one
 * @param {string} selector - Container elements
 * @param {number} delay - Delay between each in ms
 */
function staggerFadeIn(selector, delay = 200) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.6s ease ${index * delay}ms, transform 0.6s ease ${index * delay}ms`;

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 50);
  });
}
