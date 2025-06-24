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


const slider = document.getElementById("slider");
const scrollLeft = document.getElementById("scrollLeft");
const scrollRight = document.getElementById("scrollRight");

scrollLeft.addEventListener("click", () => {
  slider.scrollBy({
    left: -320,
    behavior: "smooth"
  });
});

scrollRight.addEventListener("click", () => {
  slider.scrollBy({
    left: 320,
    behavior: "smooth"
  });
});


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const header = item.querySelector('.faq-header');
  const answer = item.querySelector('.answer');
  const icon = item.querySelector('.icon');
  const question = item.querySelector('.question');

  header.addEventListener('click', () => {
    const isOpen = answer.style.display === 'block';

    // Close all answers
    document.querySelectorAll('.answer').forEach(ans => ans.style.display = 'none');

    // Reset all icons
    document.querySelectorAll('.icon').forEach(ic => ic.textContent = '+');

    // Reset all question colors
    document.querySelectorAll('.question').forEach(q => q.style.color = '#2d2d2d');

    // Toggle current one
    if (!isOpen) {
      answer.style.display = 'block';
      icon.textContent = '−';
      question.style.color = '#7A1CAC';
    }
  });
});

