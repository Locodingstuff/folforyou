// mobile nav toggle
const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// reveal on scroll using IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// set year
document.getElementById('year').textContent = new Date().getFullYear();
