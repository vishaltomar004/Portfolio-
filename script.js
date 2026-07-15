// ---- footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- profile photo (change / remove, saved in this browser) ----
const PHOTO_KEY = 'vt_profile_photo';
const DEFAULT_PHOTO = 'profile.jpg';

const navAvatar = document.getElementById('navAvatar');
const heroAvatar = document.getElementById('heroAvatar');
const avatarBtn = document.getElementById('avatarBtn');
const profileMenu = document.getElementById('profileMenu');
const changePhotoBtn = document.getElementById('changePhotoBtn');
const removePhotoBtn = document.getElementById('removePhotoBtn');
const heroAvatarBtn = document.getElementById('heroAvatarBtn');
const photoInput = document.getElementById('photoInput');

function setAvatarSrc(src) {
  navAvatar.src = src;
  heroAvatar.src = src;
}

// load a saved photo, if this visitor has set one before
try {
  const saved = localStorage.getItem(PHOTO_KEY);
  if (saved) setAvatarSrc(saved);
} catch (e) { /* localStorage unavailable — just use the default photo */ }

function openMenu() {
  profileMenu.classList.add('open');
  avatarBtn.setAttribute('aria-expanded', 'true');
}
function closeMenu() {
  profileMenu.classList.remove('open');
  avatarBtn.setAttribute('aria-expanded', 'false');
}

avatarBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  profileMenu.classList.contains('open') ? closeMenu() : openMenu();
});
document.addEventListener('click', (e) => {
  if (!profileMenu.contains(e.target) && e.target !== avatarBtn) closeMenu();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

changePhotoBtn.addEventListener('click', () => {
  closeMenu();
  photoInput.click();
});
// heroAvatarBtn.addEventListener('click', () => photoInput.click());

removePhotoBtn.addEventListener('click', () => {
  closeMenu();
  try { localStorage.removeItem(PHOTO_KEY); } catch (e) {}
  setAvatarSrc(DEFAULT_PHOTO);
});

photoInput.addEventListener('change', () => {
  const file = photoInput.files && photoInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = reader.result;
    setAvatarSrc(dataUrl);
    try { localStorage.setItem(PHOTO_KEY, dataUrl); }
    catch (e) { /* photo too large to save — it'll still show until the page reloads */ }
  };
  reader.readAsDataURL(file);
  photoInput.value = '';
});

// ---- mobile menu ----
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// ---- scroll reveal ----
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');

if (prefersReducedMotion) {
  revealEls.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
}

// ---- terminal typing effect ----
const terminalBody = document.getElementById('terminalBody');

const lines = [
  { text: '$ curl api.vishaltomar.dev/profile', cls: 'cmd' },
  { text: '', cls: '' },
  { text: '{', cls: '' },
  { text: '  "name": "Vishal Tomar",', cls: '' },
  { text: '  "role": "IT Application Engineer",', cls: '' },
  { text: '  "stack": ["Java", "Spring Boot", "SuiteScript"],', cls: '' },
  { text: '  "problems_solved": 640,', cls: '' },
  { text: '  "status": "open_to_work"', cls: '' },
  { text: '}', cls: '' },
];

function highlight(line) {
  // color JSON keys/strings a bit
  return line
    .replace(/"([a-z_]+)":/g, '<span class="k">"$1"</span>:')
    .replace(/: "([^"]+)"/g, ': <span class="s">"$1"</span>');
}

async function typeTerminal() {
  if (prefersReducedMotion) {
    terminalBody.innerHTML = lines.map(l => highlight(l.text)).join('\n');
    return;
  }

  for (const line of lines) {
    const lineEl = document.createElement('div');
    terminalBody.appendChild(lineEl);

    if (line.cls === 'cmd') {
      lineEl.classList.add('cmd');
      for (let i = 0; i <= line.text.length; i++) {
        lineEl.textContent = line.text.slice(0, i);
        await sleep(18);
      }
      await sleep(250);
    } else {
      lineEl.innerHTML = highlight(line.text) || '&nbsp;';
      await sleep(90);
    }
  }

  const cursor = document.createElement('span');
  cursor.className = 'terminal__cursor';
  terminalBody.appendChild(cursor);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

typeTerminal();
