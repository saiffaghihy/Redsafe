// Toggle visibility for long citation details
const citationToggles = document.querySelectorAll('.toggle-citation');

citationToggles.forEach(button => {
  button.addEventListener('click', () => {
    const detail = button.nextElementSibling;
    detail.classList.toggle('expanded');
    button.textContent = detail.classList.contains('expanded') ? 'Hide Source' : 'Show Source';
  });
});
