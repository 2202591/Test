let gridSize = 40;
let i = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function grid() {
  let x = 0;   let y = 0;
  strokeWeight(i);

  while (x < width) {
    while(y < height) {
      point(x,y);

      y += gridSize;
    }
    y = 0;

    x += gridSize;
  }
}

function draw() {
  background(220);
  grid();
}
