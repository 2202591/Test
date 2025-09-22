//Interactive Scene
//Corbin Potter
//Sept 16, 2025
//Mr. Scott
//CS30 P4

let centerX; let x = 500;
let centerY; let y = 200;
let r = 0; let g = 0; let b = 0;
let back = 0;
let ma = 238; let va = 146; let ea = 2; let ra = 300; let ja = 90; let ca = 90;
let mr = 110; let vr = 165; let er = 260; let rr = 325; let jr = 430; let cr = 400;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  centerX = width/2;
  centerY = height/2;
}

function draw() {  //60 fps
  if (color) {
    background(r, g, b);
  }

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
  
  fill(211, 211, 211);
  rect(x , y, 120, 30);
  rect(x , y, 20, 80);

  movement();
  mousePressed();

  textSize(40);
  text("Corbin", 780, 900);
}

function movement() {
  ma += 0.04;
  va -= 0.03;
  ea += 0.02;
  ra += 0.02;
  ja -= 0.01;
  ca += 0.05;

  if (ma === 360) {
    ma = 0;
  }
  if (va === 0) {
    va = 360;
  }
  if (ea === 360) {
    ea = 0;
  }
  if (ra === 360) {
    ra = 0;
  }
  if (ja === 0) {
    ja = 360;
  }

  if (keyIsDown(UP_ARROW)) y -= 5;
  if (keyIsDown(DOWN_ARROW)) y += 5;
  if (keyIsDown(LEFT_ARROW)) x -= 5;
  if (keyIsDown(RIGHT_ARROW)) x += 5;

}

function mousePressed(){
  if (mouseButton === CENTER) {
    mouseButton = LEFT;
    back += 1;
    if (back === 4) {
      back = 0;
    }
  }

  if (back === 0) {
    r = 0;
    g = 0;
    b = 0;
  }
  else if (back === 1) {
    r = 51;
    g = 0;
    b = 51;
  }
  else if (back === 2) {
    r = 51;
    g = 0;
    b = 25;
  }
  else {
    r = 0;
    g = 0;
    b = 51;
  }
  
}