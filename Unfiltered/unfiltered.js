// Basic expand/collapse function for podcast descriptions
const toggles = document.querySelectorAll('.toggle-description');

for (const toggle of toggles) {
  toggle.addEventListener('click', function () {
    const desc = this.nextElementSibling;
    desc.classList.toggle('visible');
    this.textContent = desc.classList.contains('visible') ? 'Hide Description' : 'Show Description';
  });
}
