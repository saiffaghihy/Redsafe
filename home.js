// Highlight active nav link based on current page
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();
  
    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  });
  