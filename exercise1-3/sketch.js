function setup () {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  rectMode(CENTER);
  noStroke();
  fill(138, 0, 139);
  square(mouseX, mouseY, 100);
  square(mouseX + 100, mouseY + 100, 100);
  square(mouseX - 100, mouseY - 100, 100);
}