const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(prefersDark ? 'dark' : 'light');
  }
}

themeToggle?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
});

initTheme();

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

const observerOptions = {
  threshold: 0.35,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        const isActive = href === `#${entry.target.id}`;
        link.classList.toggle('active', isActive);
      });
    }
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach((faq) => {
      faq.classList.remove('open');
    });

    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

function playAudio(title, url) {
  const playerBar = document.getElementById('playerBar');
  const playerTitle = document.getElementById('playerTitle');
  const audioElement = document.getElementById('audioElement');

  if (!playerBar || !playerTitle || !audioElement) return;

  playerTitle.innerText = title;
  audioElement.src = url;
  audioElement.load();
  playerBar.classList.remove('translate-y-full');
  audioElement.play();
}

document.getElementById('contactForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  const previousText = button.textContent;
  button.textContent = 'پیام شما ارسال شد ✅';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = previousText;
    button.disabled = false;
    event.currentTarget.reset();
  }, 1800);
});

const statNumbers = document.querySelectorAll('.stat-number');

const animateValue = (element) => {
  const target = Number(element.dataset.number);
  const suffix = element.textContent.includes('+') ? '+' : element.textContent.includes('%') ? '%' : '';
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 80));

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    const display = suffix === '+' ? `${current.toLocaleString('fa-IR')}+` : suffix === '%' ? `${current}%` : current.toLocaleString('fa-IR');
    element.textContent = display;
  }, 20);
};

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateValue(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

statNumbers.forEach((item) => statObserver.observe(item));
