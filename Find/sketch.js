let NUM_CIRCLES = 50;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles() {
  noFill();

  let smallestX;
  let smallestY;
  let smallestD = Infinity;

  for (let i = 0; i < NUM_CIRCLES; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20, 100);

    if(d < smallestD) {
      smallestD = d;
      smallestX = x;
      smallestY = y;
    }

    circle(x, y, d);
  }

  fill(255,0,0);
  circle(smallestX,smallestY,smallestD);
}