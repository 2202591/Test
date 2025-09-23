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
  }

}

