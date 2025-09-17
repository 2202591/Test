//Interactive Scene
//Corbin Potter
//Sept 16, 2025
//Mr. Scott
//CS30 P4

let centerX = width/2;
let centerY = height/2;
let ma = 235, va = 145, ea = 3, ra = 300, ja = 90;
let mr = 125, vr = 175, er = 230, rr = 275, jr = 300;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {  //60 fps
  background(0, 0, 0);
  noStroke();
  move();

  fill(246, 173, 48);
  circle(width/2, height/2, 150);

  fill(196, 93, 49);
  circle(centerX + mr * cos(ma), centerY + mr * sin(ma), 40);

  fill(134, 57, 24);
  circle(centerX + mr * cos(ma), centerY + mr * sin(ma), 60); // adjust orbits

  fill(24, 134, 68);
  circle(centerX + mr * cos(ma), centerY + mr * sin(ma), 80);

  fill(82, 69, 168);
  circle(centerX + mr * cos(ma), centerY + mr * sin(ma), 70);

  fill(145, 127, 11);
  circle(centerX + mr * cos(ma), centerY + mr * sin(ma), 120);

}

function move() {
  
}
