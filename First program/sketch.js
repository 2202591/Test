// First project
// Corbin
// Sept 9, 2025
//
// Interactive Programs


function setup() { // runs once at the start
  createCanvas(windowWidth, windowHeight);
}

function draw() { //runs over and over running 60 frames per sec
  // background(220);
  fill(0,mouseX, mouseY);
  circle(mouseX, mouseY, 30);
}
