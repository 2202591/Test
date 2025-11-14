let grid = [[]];

let squareSize = 50;
let rows =  10;
let cols = 10;
let x;
let y;
let pattern = 0;

function setup() {
  createCanvas(cols*squareSize, rows*squareSize);
  randomGrid(); //creates one random grid 
}

function draw() {
  background(220);
  renderGrid();
  checkGrid();
  overlay();
  x = getCurrentX();  //gets  mouse X and Y as global variables
  y = getCurrentY();
}

function mousePressed() {
  if (mouseX <= width & mouseY <= height) {
    if (keyIsDown(16)) {  //if shift is down only flips 1 square
      flip(x,y);
    }
    else if (keyIsDown(32)) {  //if space is held down square pattern
      flip(x,y);
      if (x + 1 < cols)  flip(x + 1, y);
      if (y + 1 < rows)  flip(x, y + 1);
      if (y + 1 < rows && x + 1 < cols)  flip(x+1, y+1);
    }
    else {  //cross pattern
      flip(x,y);
      if (x + 1 < cols)  flip(x + 1, y);
      if (y- 1 >= 0)     flip(x, y - 1);
      if (x - 1 >= 0)    flip(x - 1, y);
      if (y + 1 < rows)  flip(x, y + 1);
    }
  }
}

function getCurrentX() {  //gets mouse X postion in terms of grid squares
  let constrainedX = constrain(mouseX, 0, width-1);  //only allows mouse X postion on the canvas
  return floor(constrainedX / squareSize);
}

function getCurrentY() {  //gets mouse Y postion in terms of grid squares
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / squareSize);
}

function flip(x,y) {  //swaps white to black and black to white
  if (grid[y][x] === 0)  grid[y][x] = 255;
  else grid[y][x] = 0;
}

function renderGrid() {  //turns array into grid with color
  for(let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let fillColor = grid[y][x];  //takes color
      fill(fillColor);
      square(x*squareSize, y*squareSize, squareSize);  //creates square with that color
    }
  }
}

function checkGrid() { //checks grid to see if its all white or all black
  countB = 0;
  countW = 0;
  for(let y = 0; y < rows; y++) {  //runs through each grid square checking if its white or black
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 255)    countW++;  //adds to total count
      if (grid[y][x] === 0)    countB++;
    }
  }
  textSize(40);
  textAlign(CENTER); 
  if(countB === cols*rows) {  //if total count is = number of grid squares you win
    fill(255);
    text("You Win", width*0.5, height/2);
  }
  if(countW === cols*rows) {
    fill(0);
    text("You Win", width*0.5, height/2);
  }
}

function randomGrid() {  //randomizes grid start
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      let num = random(0,1);  //chooses either white or black
      if (num >= 0.5)   num = 255;
      else num = 0;
      grid[y].push(num);
    }
  } 
  grid.pop();
}

function overlay() {  //ligth green squares are made
  //follows mouse around and changes based on current patttern
  if (mouseX <= width & mouseY <= height) {
    fill(0,255,0,50); 
    if (keyIsDown(16)) {  //if shift is down 1 square overlay
      rect(x*squareSize, y*squareSize, squareSize, squareSize);
    }
    else if (keyIsDown(32)) {  //if space is held down square pattern overlay
      rect(x*squareSize, y*squareSize, squareSize, squareSize);
      if (x + 1 < cols)  rect((x+1)*squareSize, y*squareSize, squareSize, squareSize);
      if (y + 1 < rows)  rect(x*squareSize, (y+1)*squareSize, squareSize, squareSize);
      if (y + 1 < rows && x + 1 < cols)  rect((x+1)*squareSize, (y+1)*squareSize, squareSize, squareSize);
      
    }
    else {  //cross pattern overlay
      rect(x*squareSize, y*squareSize, squareSize, squareSize);
      if (x + 1 < cols)  rect((x+1)*squareSize, y*squareSize, squareSize, squareSize);
      if (y- 1 >= 0)     rect(x*squareSize, (y-1)*squareSize, squareSize, squareSize);
      if (x - 1 >= 0)    rect((x-1)*squareSize, y*squareSize, squareSize, squareSize);
      if (y + 1 < rows)  rect(x*squareSize, (y+1)*squareSize, squareSize, squareSize);
    }
  }
  
}
