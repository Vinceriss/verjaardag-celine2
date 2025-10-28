const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
let pieces = [];
let animation;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createConfetti() {
  pieces = [];
  for (let i = 0; i < 300; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      w: 8,
      h: 8,
      c: `hsl(${Math.random() * 360}, 100%, 50%)`,
      s: Math.random() * 4 + 2
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    ctx.fillStyle = p.c;
    ctx.fillRect(p.x, p.y, p.w, p.h);
    p.y += p.s;
    if (p.y > canvas.height) p.y = 0;
  });
  animation = requestAnimationFrame(drawConfetti);
}

function startConfetti() {
  createConfetti();
  drawConfetti();
}

function stopConfetti() {
  cancelAnimationFrame(animation);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
