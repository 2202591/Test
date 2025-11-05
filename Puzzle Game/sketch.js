let grid = [[]];

let squareSize = 50;
let rows;
let cols;

function setup() {
  rows = grid.length;
  cols = grid[0].length;
  createCanvas(cols*squareSize, rows*squareSize);
}

function draw() {
  background(220);
  renderGrid();
  // print(getCurrentX(), getCurrentY());

}

function mousePressed() {
  let x = getCurrentX();
  let y = getCurrentY();
  if(keyIsDown && keyCode === SHIFT) flip(x,y);
  else {
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
  
  if(countB === (cols+1)*(rows+1)) {
    fill(255);
    text("You Win", cols*(squareSize/2), rows*(squareSize/2))
  }
  if(countW === (cols+1)*(rows+1)) {
    fill(0);
    text("You Win", cols*(squareSize/2), rows*(squareSize/2))
  }
}