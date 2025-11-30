function setup () {
    createCanvas(800, 800);
}

function draw() {
    let centreX = mouseX;
    let centreY = mouseY;

    background(255);
    noStroke();

    //dark green
    fill(42, 121, 33);
    rectMode(CENTER);
    rect(centreX, centreY, 75, 125);
    rectMode(CORNER);
    ellipse(centreX, centreY - 125, 80, 30);
    triangle(centreX - 40, centreY - 125, centreX + 40, centreY - 125, centreX, centreY);

    // lime green
    fill(123, 158, 58);
    triangle(centreX - 25, centreY - 62.5, centreX + 25, centreY - 62.5, centreX, centreY - 35);
    rect(centreX + 37.5, centreY - 62.5, 60, 15);
    rect(centreX - 97.5, centreY - 62.5, 60, 15);

    //brown
    fill(77,47,9);
    rect(centreX - 37.5, centreY + 20, 75, 15);
    rect(centreX - 37.5, centreY + 92.5, 25, 20);
    rect(centreX + 12.5, centreY + 92.5, 25, 20);

    //yellow
    fill(193, 177, 20);
    circle(centreX , centreY + 27.5, 20);

    //skin
    fill(226, 198, 129);
    rectMode(CENTER);
    square(centreX - 97.5, centreY - 55, 15);
    square(centreX + 97.5, centreY - 55, 15);
    rect(centreX, centreY - 67.5, 20, 10);
    square(centreX, centreY - 100, 60);

    //hair
    fill(209, 201, 8);
    square(centreX + 25, centreY - 120, 5);
    rectMode(CORNER);
    rect(centreX - 35, centreY - 130, 10, 45, 20,);
    rect(centreX - 35, centreY - 130, 70, 10, 20);
    rect(centreX + 25, centreY - 130, 10, 45, 20);
    triangle(centreX, centreY - 100, centreX + 10, centreY - 130, centreX + 35.5, centreY - 110);
    triangle(centreX - 40, centreY - 100, centreX - 20, centreY - 130, centreX + 35.5, centreY - 120);

    //light grey
    fill(175, 179, 176);
    rect(centreX - 37.5, centreY + 62.5, 25, 30);
    rect(centreX + 12.5, centreY + 62.5, 25, 30);

    //black
    fill(0);
    circle(centreX - 15, centreY - 90, 7);
    circle(centreX + 15, centreY - 90, 7);
    
    //sword
    if (mouseIsPressed) {
    fill(60, 55, 88);
    rect(centreX + 95, centreY - 65, 10, 20);
    rect(centreX + 85, centreY - 70, 30, 10);
    fill(136, 153, 170);
    rect(centreX + 95, centreY - 120, 10, 50);
    triangle(centreX + 95, centreY - 120, centreX + 105, centreY - 120, centreX + 100, centreY - 135);
    }
}