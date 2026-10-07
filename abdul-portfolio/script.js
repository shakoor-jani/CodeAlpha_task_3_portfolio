// ===== 1) Mobile menu toggle =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('show');
});

// Jab kisi link par click ho, mobile menu apne aap band ho jaye
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('show');
  });
});

// ===== 2) Smooth scroll (extra control, CSS scroll-behavior ke sath) =====
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== 3) Skill bars animate hon jab scroll karke skills section tak pahunchen =====
const skillBars = document.querySelectorAll('.fill');

function animateSkillsOnScroll() {
  const skillsSection = document.getElementById('skills');
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Agar section screen ke andar aa jaye, bars ko unki asal width par set kar do
  if (sectionTop < windowHeight - 100) {
    skillBars.forEach(function (bar) {
      bar.style.width = bar.style.width; // already set via inline style in HTML
    });
    window.removeEventListener('scroll', animateSkillsOnScroll);
  }
}

window.addEventListener('scroll', animateSkillsOnScroll);

// ===== 4) Contact form submit handle karna =====
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // page reload hone se rokna

  const name = document.getElementById('name').value;

  // Abhi ke liye sirf message dikha rahe hain
  // Real project mein yahan backend/API call ya EmailJS use hoga
  status.textContent = `Shukriya ${name}! Aapka message mil gaya hai.`;
  form.reset();
});

// ===== 5) Back-to-top button =====
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
