// Smooth scroll
document.querySelector('.scroll-down').addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('#about').offsetTop,
    behavior: 'smooth'
  });
});

// Animate Leadership section on scroll
const leadershipCard = document.querySelector('.leadership-card');
window.addEventListener('scroll', () => {
  const rect = leadershipCard.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    leadershipCard.classList.add('visible');
  }
});

// Fade-in animation
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('fadeInUp');
    });
  });
  document.querySelectorAll('.skill-card, .leadership-card').forEach(el => observer.observe(el));
});
