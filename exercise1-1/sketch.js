function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  rectMode(CORNERS);
  rect(0, 0, mouseX, mouseY);
}