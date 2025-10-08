//Interactive Scene
//Corbin Potter
//Sept 16, 2025
//Mr. Scott
//CS30 P4

let centerX; let x = 500;  //initalizes variables for the centers of the x and y coordinates
let centerY; let y = 200;  //initailizes variables for x and y coordinates of space station
let r = 0; let g = 0; let b = 0; //sets RGB colors for background color
let back = 0; //inital background color setting
//initalizes angle and orbiatl radius for each planet
//a = angles, r = radius
//m = mercury, v = venus, e = earth, w = mars, j = jupiter
let ma = 238; let va = 146; let ea = 2; let wa = 300; let ja = 90;
let mr = 110; let vr = 165; let er = 260; let wr = 325; let jr = 430;

function setup() {
  createCanvas(1000, 1000);  //sets canvas dimensions to 1000 by 1000
  rectMode(CENTER); //makes rectangles from the center rather than the side
  centerX = width/2; //sets the middle for each axis
  centerY = height/2;
}

function draw() {  //60 fps
  background(r, g, b); //background color

  noStroke();  //draws shapes without an outile

  fill(246, 173, 48);  //creates the sun
  circle(width/2, height/2, 150);

  //uses trigenometry to move the planets
  fill(196, 93, 49);  //creates inner most planet
  circle(centerX + mr * cos(ma), centerY + mr * sin(ma), 40); 

  fill(134, 57, 24); // creates 2nd inner most planet
  circle(centerX + vr * cos(va), centerY + vr * sin(va), 60); // adjust orbits

  fill(24, 134, 68); //creates 3rd inner most plaent
  circle(centerX + er * cos(ea), centerY + er * sin(ea), 80);

  fill(82, 69, 168);  //creatse 4th inner most planet
  circle(centerX + wr * cos(wa), centerY + wr * sin(wa), 70);

  fill(145, 127, 11); //creates outer most planet
  circle(centerX + jr * cos(ja), centerY + jr * sin(ja), 120);

  //makes space ship
  fill(255,128,0); // orange part
  triangle(mouseX - 10, mouseY + 35, mouseX + 10, mouseY + 35, mouseX, mouseY - 20);
  fill(211,211,211); //grey part
  rect(mouseX, mouseY, 20, 40);
  fill(255,0,0); // red part
  triangle(mouseX - 10, mouseY - 20, mouseX + 10, mouseY - 20, mouseX, mouseY - 40);
  
  fill(211, 211, 211);  //cretaes space station
  rect(x , y, 120, 30); //horizontal rectangle
  rect(x , y, 20, 80);  //vertical rectangle

  movement(); //calls movement function
  mousePressed(); //calls mouse button function

  textSize(40);  //Writes corbin in the bottom right corner
  text("Corbin", 780, 900);
}

function movement() {
  ma += 0.04;   //the larger the number the quicker the planet orbits
  va -= 0.03;
  ea += 0.02;
  wa += 0.02;
  ja -= 0.01;

  if (ma === 360) { //resets each planets angle back to 0 once it reaches 360 degrees
    ma = 0;
  }
  if (va === 0) {
    va = 360;
  }
  if (ea === 360) {
    ea = 0;
  }
  if (wa === 360) {
    wa = 0;
  }
  if (ja === 0) {
    ja = 360;
  }

  if (keyIsDown(UP_ARROW)) y -= 5;    //moves the space station up and down with the arrow keys
  if (keyIsDown(DOWN_ARROW)) y += 5;
  if (keyIsDown(LEFT_ARROW)) x -= 5;
  if (keyIsDown(RIGHT_ARROW)) x += 5;

}

function mousePressed(){
  if (mouseButton === CENTER) {   //4 different backgrounds
    mouseButton = LEFT;
    back += 1;
    if (back === 4) {
      back = 0;
    }
  }

  if (back === 0) {  //background color black
    r = 0;
    g = 0;
    b = 0;
  }
  else if (back === 1) {  //purple background
    r = 51;
    g = 0;
    b = 51;
  }
  else if (back === 2) {  //red background
    r = 51;
    g = 0;
    b = 25;
  }
  else {  //blue background
    r = 0;
    g = 0;
    b = 51;
  }
  
}