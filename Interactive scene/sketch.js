//Interactive Scene
//Corbin Potter
//Sept 16, 2025
//Mr. Scott
//CS30 P4


let circleColor = false;
let currentColor = "white";

let x; let y = 300;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  x = width/2
}

function draw() {  //60 fps
  background(0, 100, 200);
  challenge();  //coordinate system challenge
  movement();
  rect(x, y, 60, 30);
  noStroke();
  triangle(0,500,);
  fill(211, 211, 211);
}

function movement() {
  // check for keyboard presses each frame
  // and move the rectangle accordingly

  // if (keyCode === RIGHT_ARROW && keyIsPressed) x += 5;
  // else if (keyCode === LEFT_ARROW && keyIsPressed) x -= 5;

  if (keyIsDown(UP_ARROW)) y -= 15;
  if (keyIsDown(DOWN_ARROW)) y += 15;
  if (keyIsDown(LEFT_ARROW)) x -= 15;
  if (keyIsDown(RIGHT_ARROW)) x += 15;
}

function keyPressed() {

}
