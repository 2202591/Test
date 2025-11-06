let grid = [[]];
let overlayGrid;

let squareSize = 50;
let rows = 10;
let cols = 10;
let x;
let y;

function setup() {
  createCanvas(cols*squareSize, rows*squareSize);
  randomGrid();
  overlayGrid = grid;
  print(overlayGrid);
}

function draw() {
  background(220);
  renderGrid();
  checkGrid();
  // overlay();
  x = getCurrentX();
  y = getCurrentY();

}

function mousePressed() {
  if(keyIsDown && keyCode === SHIFT) {
    flip(x,y);
  }
  else {
    flip(x,y);
    if (x + 1 < cols)  flip(x + 1, y);
    if (y- 1 >= 0)     flip(x, y - 1);
    if (x - 1 >= 0)    flip(x - 1, y);
    if (y + 1 < rows)  flip(x, y + 1);
  }

}

function getCurrentX() {
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / squareSize);
}

function getCurrentY() {
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / squareSize);
}

function flip(x,y) {
  if (grid[y][x] === 0)  grid[y][x] = 255;
  else grid[y][x] = 0;
}

function renderGrid() {
  for(let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize, y*squareSize, squareSize);
    }
  }
}

function checkGrid() {
  countB = 0;
  countW = 0;
  for(let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 255)    countW++;
      if (grid[y][x] === 0)    countB++;
    }
  }
  textSize(40);
  if(countB === cols*rows) {
    fill(255);
    text("You Win", width*0.4, height/2);
  }
  if(countW === cols*rows) {
    fill(0);
    text("You Win", width*0.4, height/2);
  }
}

function randomGrid() {
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      let num = random(0,1);
      if (num >= 0.5)   num = 255;
      else num = 0;
      grid[y].push(num);
    }
  }
  grid.pop();
}

// function overlay() {
//   push();
//   if (x + 1 < cols)   
//   if (y- 1 >= 0)      
//   if (x - 1 >= 0)     
//   if (y + 1 < rows)   
//   pop();
// }
