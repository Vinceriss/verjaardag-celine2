let currentColor = '#2b07f7ff';

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // HTML element listeners
  document.getElementById('colorPicker').addEventListener('input', (e) => {
    currentColor = e.target.value;
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    background(255); // canvas reset
  });
}

function draw() {
  let diameter = random(50, 125);

  // gebruik de gekozen kleur
  fill(currentColor);

  // teken twee cirkels zoals jij had
  circle(mouseX, mouseY, diameter);
  circle(width - mouseX, height - mouseY, diameter);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
