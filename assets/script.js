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

function playAudio(title, url) {
  const playerBar = document.getElementById('playerBar');
  const playerTitle = document.getElementById('playerTitle');
  const audioElement = document.getElementById('audioElement');

  playerTitle.innerText = title;
  audioElement.src = url;
  audioElement.load();
  playerBar.classList.remove('translate-y-full');
  audioElement.play();
}

document.querySelector('form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  const previousText = button.textContent;
  button.textContent = 'ثبت شد ✅';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = previousText;
    button.disabled = false;
    event.currentTarget.reset();
  }, 1800);
});
