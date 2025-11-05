// ==== Efek Partikel ====
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() * 0.5
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0,255,255,0.8)';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  updateParticles();
}

function updateParticles() {
  particles.forEach(p => {
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawParticles, 30);

// ==== Theme Toggle ====
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ==== Music Toggle ====
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
let musicPlaying = false;

musicToggle?.addEventListener('click', () => {
  if (!music) return;
  if (!musicPlaying) {
    music.play();
    musicPlaying = true;
    musicToggle.textContent = '🔇';
  } else {
    music.pause();
    musicPlaying = false;
    musicToggle.textContent = '🎵';
  }
});
