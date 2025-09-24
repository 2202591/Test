// Images and noise and random

let x1, y1, x2, y2;
let d1, d2;
let noiseTime = 5, noiseSpeed = 0.01;

let mx, my;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width*0.3;       y1 = height*0.5;
  x2 = width*0.7;       y2 = height*0.5;
  mx = width*0.5;       my = height*0.2;
}

function draw() {
  background(220);
  // randomCircle();
  // noiseCircle();
  noiseMove();
}

// function randomCircle(){
//   fill(50,150,250);
//   d1 = random(5,300);
//   circle(x1,y1,d1);
// }

// function noiseCircle(){
//   d2 = noise(noiseTime);
//   noiseTime += noiseSpeed;
//   d2 = map (d2, 0, 1, 5, 200);
//   circle(x2, y2, d2);
// }

function noiseMove(){
  mx = noise(noiseTime);
  noiseTime += 1;
  mx = map (mx, 0, 1, 0, width);

  my = noise(noiseTime);
  noiseTime += 0.02;
  my = map (my, 0, 1, 0, height);
  circle(mx, my, 200);
}