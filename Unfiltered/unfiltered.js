// unfiltered.js - Animated Reveal for Podcast Episodes

document.addEventListener("DOMContentLoaded", () => {
  revealEpisodes(".podcast-episode", 180);
});

/**
 * Fades in each podcast episode with a staggered effect
 * @param {string} selector - Podcast episode elements
 * @param {number} delay - Delay between animations in ms
 */
function revealEpisodes(selector, delay = 180) {
  const episodes = document.querySelectorAll(selector);

  episodes.forEach((episode, index) => {
    episode.style.opacity = 0;
    episode.style.transform = "translateY(25px)";
    episode.style.transition = `opacity 0.7s ease ${index * delay}ms, transform 0.7s ease ${index * delay}ms`;

    setTimeout(() => {
      episode.style.opacity = 1;
      episode.style.transform = "translateY(0)";
    }, 100);
  });
}
