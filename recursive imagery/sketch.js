
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function centerCircle(x,y,d) {
  if (d > 1) {
    circle(x,y,d);
    centerCircle(x,y,d*0.99);
  }
}

function circleFractal(x,y,d) {
  if (d > 1) {
    circle(x,y,d);
    circleFractal(x-d/2,y,d/2);
    circleFractal(x+d/2,y,d/2);
    circleFractal(x,y+d/2,d/2);
    // circleFractal(x,y+d/2,d/2);
  }
}

function draw() {
  fill(255,0,0,10);
  rectMode(CENTER);
  background(0);
  stroke(255);
  // circleFractal(width/2,height/2,width/2);
  squareFractal(width/2, height/2, width/2);
  setFill();
}

function setFill(x,y,s){
  if(dist(mouseX,mouseY,x,y) < s/2) {
    strokeWeight(5);
  }
  else strokeWeight(1);
}

function squareFractal(x,y,size) {
  if (size > 10) {
    push();
    let r = map(x,0,width,0,255);
    let g = map(y,0,height,0,255);
    let b = map(y,0,width,255,0);
    stroke(r,g,b);
    translate(x, y);
    rotate(radians(frameCount));
    setFill(x,y,size);
    square(0,0,size);
    pop();
    squareFractal(x-size/2,y-size/2,size*0.5);
    squareFractal(x-size/2,y+size/2,size*0.5);
    squareFractal(x+size/2,y+size/2,size*0.5);
    squareFractal(x+size/2,y-size/2,size*0.5);
  }
}