// Clock

let hours; let minutes; let seconds;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  const now = new Date();
}

function draw() {
  background(220);
  makeClock();
  seconds();
  minutes();
  hours();
}

function makeClock() {
  push();
  translate(width/2, height/2);

  noFill();  //draws clock
  strokeWeight(6);
  circle(0, 0, 400);
  for (let i = 0; i < 12; i++) {
    strokeWeight(8);
    line(0, 180, 0, 150);
    rotate(6);
    for(let a = 0; a < 4; a++) {
      strokeWeight(4);
      line(0, 180, 0, 160);
      rotate(6);
    }
  }

  pop();
}

function seconds() {
  push();
  let seconds = now.getSeconds();
  seconds = seconds*6;
  translate(width/2, height/2);
  rotate(seconds);

  strokeWeight(4);
  stroke(255,0,0);
  line(0, 0, 0, -150);

  pop();
}

function minutes() {
  push();
  let minutes = now.getMinutes();
  minutes = minutes*6;
  translate(width/2, height/2);
  rotate(minutes);

  strokeWeight(6);
  stroke(0);
  line(0, 0, 0, -120);

  pop();
}

function hours() {
  push();
  translate(width/2, height/2);
  rotate(frameCount/7200);

  strokeWeight(10);
  line(0, 0, 0, -80);

  pop();
}

