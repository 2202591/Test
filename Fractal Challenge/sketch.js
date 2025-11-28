function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circleFractal
}

function circleFractal(x,y,s,num) {
  if(s > 10) {
    return circleFractal();
  }
}
