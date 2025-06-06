// script.js - Global Interactivity & Effects

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveLink();
  animateSectionsOnScroll();
});

/**
 * Highlights the active page in the navbar based on URL
 */
function highlightActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (currentPage === linkHref) {
      link.classList.add("active");
    }
  });
}

/**
 * Adds a fade-in-up animation to sections when they enter the viewport
 */
function animateSectionsOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
  });
}
