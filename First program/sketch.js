// First project
// Corbin
// Sept 9, 2025
// 
// Interactive Programs with p5.js


function setup() { // runs once at the start
  createCanvas(windowWidth, windowHeight);
}

function draw() { //runs over and over running 60 frames per sec
  // background(220);
  fill(100,mouseX, mouseY);
  circle(mouseX, mouseY, 10);
}

function drawTwoCircles() {
  //draws to circles one at fixed location
  //on at mouse location
  fill(0, 255, 0);
  circle(mouseX,mouseY,30);
}