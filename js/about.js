// Toggle nav menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav_menu');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('show');
});