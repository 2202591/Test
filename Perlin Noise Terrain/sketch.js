// Perlin Noise Terrain Generation
// Corbin Potter
// September 29, 2025
// CS30

let rectWidth = 1;  //rectangle width
let noiseTime;
let noiseStart;
let largestY = Infinity;
let largestX;
let speed = 1;
let sumY = 0;
let average;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseStart = random(0,100);
}

function draw() {
  background(220);
  generateTerrain();
  drawFlag();
  changeWidth();
}

function generateTerrain() {
  //generates terrain
  rectMode(CORNERS);
  noStroke();
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

    sumY += rectHeight;
    average = sumY / x;

    fill(0);
    rect(x, height, x2, y2);
    noiseTime += 0.007;

    if(largestX < 0){
      largestY = Infinity;
    }

  }
  averageHeight();

  noiseStart += 0.007;
  noiseTime = noiseStart;
}

function drawFlag() {
  //draws the flag at the highest point
  noStroke();
  fill(0);
  rect(largestX,largestY + 30, largestX + 2, largestY - 30);
  fill(255,0,0);
  triangle(largestX + 2, largestY - 30, largestX + 12, largestY - 24, largestX + 2, largestY - 18);
  largestX -= speed;
}

function changeWidth() {
  //allows user to change the rectangle Width
  if (keyIsDown(UP_ARROW)) {
    rectWidth += 0.02;
    speed += 0.02;
    largestY = Infinity;
  }
  if (keyIsDown(DOWN_ARROW) && rectWidth > 1) {
    rectWidth -= 0.02;
    speed -= 0.02;
    largestY = Infinity;
  }
}

function averageHeight() {
  fill(255, 0, 0, 75);
  noStroke();
  rect(0, height - average, width, average);

}