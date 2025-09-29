// Perlin Noise Terrain Generation
// Corbin Potter
// September 29, 2025
// CS30

let rectWidth = 1;
let timeY;
let bigX, bigY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  timeY = random(0,100);
  generateTerrain();

}

function draw() {
  // background(220);
}

function generateTerrain() {

  rectMode(CORNERS);

  for (let x = 0; x < width; x += rectWidth) {
    let rectHeight = noise(timeY);
    rectHeight = map(rectHeight, 0, 1, 50, height/2);
    // let rectHeight = random(50,500);

    let x2 = x + rectWidth;
    let y2 = height - rectHeight

    
    
    rect(x, height, x2, y2);
    timeY += 0.007;

  }

}
