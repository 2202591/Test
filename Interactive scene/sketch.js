//Interactive Scene
//Corbin Potter
//Sept 16, 2025
//Mr. Scott
//CS30 P4

let centerX;
let centerY;
let ma = 238; let va = 146; let ea = 2; let ra = 300; let ja = 90;
let mr = 110; let vr = 165; let er = 260; let rr = 325; let jr = 430;

angleMode(DEGREES);

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  centerX = width/2;
  centerY = height/2;
}

function draw() {  //60 fps
  background(0, 0, 0);

  fill(255,128,0);
  triangle(mouseX - 10, mouseY + 35, mouseX + 10, mouseY + 35, mouseX, mouseY - 20);
  fill(211,211,211);
  rect(mouseX, mouseY, 20, 40);
  fill(255,0,0);
  triangle(mouseX - 10, mouseY - 20, mouseX + 10, mouseY - 20, mouseX, mouseY - 40);
  

  noStroke();

  fill(246, 173, 48);
  circle(width/2, height/2, 150);

  fill(196, 93, 49);
  circle(centerX + mr * cos(ma), centerY + mr * sin(ma), 40);

  fill(134, 57, 24);
  circle(centerX + vr * cos(va), centerY + vr * sin(va), 60); // adjust orbits

  fill(24, 134, 68);
  circle(centerX + er * cos(ea), centerY + er * sin(ea), 80);

  fill(82, 69, 168);
  circle(centerX + rr * cos(ra), centerY + rr * sin(ra), 70);

  fill(145, 127, 11);
  circle(centerX + jr * cos(ja), centerY + jr * sin(ja), 120);
  
  movement();

  let src = "Corbin";

  fill(255,255,255);
  textSize(40);
  text(src, 750, 900);
}

function movement() {
  ma += 0.04;
  va += 0.03;
  ea += 0.02;
  ra += 0.02;
  ja += 0.01;

  if(ma === 360) {
    ma = 0;
  }
  if(va === 360) {
    va = 0;
  }
  if(ea === 360) {
    ea = 0;
  }
  if(ra === 360) {
    ra = 0;
  }
  if(ja === 360) {
    ja = 0;
  }
}

function mousePressed() {

}


