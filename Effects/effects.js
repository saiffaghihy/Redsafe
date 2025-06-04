// effects.js

// Highlight current nav link based on URL
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname;
  
    navLinks.forEach(link => {
      if (link.href.includes(currentPath.split("/").pop())) {
        link.classList.add("active");
      }
    });
  });
  