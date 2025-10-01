// Perlin Noise Terrain Generation
// Corbin Potter
// September 29, 2025
// CS30

let rectWidth = 1;
let timeY;
let largestY = 1000;
let largestX;

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
    rectHeight = map(rectHeight, 0, 1, 50, height * 0.7);
    // let rectHeight = random(50,500);

    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    if (y2 < largestY) {
      largestY = y2;
      largestX = x2;

    }
    
    rect(x, height, x2, y2);
    timeY += 0.007;

    print(largestY + ", " + largestX);
  }

  noFill()
  rect(largestX,largestY, largestX + 2, largestY - 30);
  fill(255,0,0);
  triangle(largestX + 2, largestY - 30, largestX + 12, largestY - 24, largestX + 2, largestY - 18);

}

// let NUM_CIRCLES = 50;
// let seed;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   seed = random(100);
// }

// function draw() {
//   randomSeed(seed);
//   background(220);
//   drawCircles();
// }

// function drawCircles() {
//   noFill();

//   let smallestX;
//   let smallestY;
//   let smallestD = Infinity;

//   for (let i = 0; i < NUM_CIRCLES; i++) {
//     let x = random(0, width);
//     let y = random(0, height);
//     let d = random(20, 100);

//     if(d < smallestD) {
//       smallestD = d;
//       smallestX = x;
//       smallestY = y;
//     }

//     circle(x, y, d);
//   }

//   fill(255,0,0);
//   circle(smallestX,smallestY,smallestD);
// }
