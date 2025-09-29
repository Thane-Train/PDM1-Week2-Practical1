function setup () {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  rectMode(CORNERS);
  fill(138, 0, 139);
  rect(600 - mouseX, 600 - mouseY, mouseX, mouseY);
}