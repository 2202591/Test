// Perlin Noise Terrain Generation
// Corbin Potter
// September 29, 2025
// CS30

let rectWidth = 1;  //rectangle width
let noiseTime;      //noise start time
let noiseStart;
let largestY = Infinity; 
let largestX;
let speed = 1;
let sumY = 0;
let averageY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseStart = random(0,100);  // start time for noise is different each time
}

function draw() { // loop that draws at 60 fps
  background(220);
  generateTerrain();
  drawFlag();
  changeWidth();
}

function generateTerrain() {
  //generates terrain
  rectMode(CORNERS);  //makes rectangles from the corners
  noStroke();
  noiseTime = noiseStart;
  sumY = 0;

  for (let x = 0; x < width; x += rectWidth) {
    let rectHeight = noise(noiseTime); 
    rectHeight = map(rectHeight, 0, 1, 50, height * 0.9); //takes noise values
    //ranging from 0-1 and turns them to values 50 - height * 0.9

    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    if (y2 < largestY) {   //changes the largest x and y value 
      largestY = y2;
      largestX = x2;
    }
    
    sumY += rectHeight;  //sum of Y value

    fill(0);         //creates the rectangle the makes up the terrain
    rect(x, height, x2, y2);
    noiseTime += 0.007;     //moves on to the next rectangle

    if(largestX < 0){   //resets largest X value if the x postion of teh flag moves off the scree
      largestY = Infinity;
    }

  }
  //shifts the time over to crete the panning effect
  noiseStart += 0.007;
  noiseTime = noiseStart;

  averageY = height - (sumY/ (width / rectWidth));  //average Y value
  fill(255, 0, 0, 75);   //creates the average Y value height
  rect(0, averageY + 10, width, averageY - 10);
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
    speed += 0.02;  //changes the speed at which the flag moves
    largestY = Infinity;  //resets largestY so the flag doesnt go off screen
  }
  if (keyIsDown(DOWN_ARROW) && rectWidth > 1) {
    rectWidth -= 0.02;
    speed -= 0.02;   // changes the speed at which the flags move
    largestY = Infinity;  //resets largestY so the flag doesnt go off screen
  }
}