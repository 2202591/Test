// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circleLines(height * 0.5, 80);
  circleLines(height * 0.8, 30);

}


function circleLines(y, size) {
  let xstart = width * 0.1;
  let xend = width * 0.9;

  for(let x = xstart; x <= xend; x += size) {
    circle(x, y, size);
    let d = distance(x, mouseX, y, mouseY)
    text(d, x, y)
  }

}

function distance(x1, x2, y1, y2) {
  let a = abs(x1 - x2);
  let b = abs(y1 - y1);
  let c = sqrt(pow(a,2) + pow(b,2));

  return c.toFixed(1);
}


