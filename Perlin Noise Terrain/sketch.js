// Perlin Noise Terrain Generation
// Corbin Potter
// September 29, 2025
// CS30

let rectWidth = 1;
let noiseTime;
let noiseStart;
let largestY = 1000;
let largestX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseStart = random(0,100);
}

function draw() {
  background(220);
  generateTerrain();
  drawFlag();
}

function generateTerrain() {

  rectMode(CORNERS);
  noiseTime = noiseStart;

  for (let x = 0; x < width; x += rectWidth) {
    let rectHeight = noise(noiseTime);
    rectHeight = map(rectHeight, 0, 1, 50, height * 0.9);

    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    if (y2 < largestY) {
      largestY = y2;
      largestX = x2;
    }

    rect(x, height, x2, y2);
    noiseTime += 0.007;
  }
  noiseStart += 0.007;
  noiseTime = noiseStart;
}

function drawFlag() {
  noStroke();
  fill(0);
  rect(largestX,largestY, largestX + 2, largestY - 30);
  fill(255,0,0);
  triangle(largestX + 2, largestY - 30, largestX + 12, largestY - 24, largestX + 2, largestY - 18);
  fill(0);
}

