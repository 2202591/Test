let tiles = [];  //0 - grass, 1 - chicken, 2 - cow, 3 - star

let level = [
  [0, 1, 0, 3, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0]
]

let playerX = 3;
let playerY = 4;
let rows = level.length; 
let cols = level[0].length;
let tileSize = 100;

function setup() {
  createCanvas(tileSize*cols, tileSize*rows);
  loadAssets();
  level[playerX][playerY] = 2;
}

async function loadAssets() {
  for (let i = 0; i < 4; i++) {
    tiles.push(await loadImage("assets/" + i + ".png"));
  }
}

function draw() {
  renderBoard();
}

function swap (x1, y1, x2, y2) {
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function renderBoard() {
  for(let x = 0; x < cols; x++) {
    for(let y = 0; y < rows; y++) {
      let imgIndex = level[y][x];
      let currentImage = tiles[imgIndex];
      image(currentImage, x*tileSize, y*tileSize);
    }
  }
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    if(playerX > 0) {
      if(level[playerY][playerX-1] === 0) {
        swap(playerX, playerY, playerX - 1, playerY);
        playerX--;
      }
      else if(level[playerY][playerX-1] === 1) {
        if(playerX > 1 && level[playerY][playerX - 2] === 0) {

        }
      }
      else{

      }
    }
  }
  if(keyCode === RIGHT_ARROW) {
    if(playerX < width) {
      swap(playerX, playerY, playerX + 1, playerY);
      playerX++;
    }
  }
  if(keyCode === UP_ARROW) {
    if(playerY > 0) {
      swap(playerX, playerY, playerX, playerY - 1);
      playerY--;
    }
  }
  if(keyCode === DOWN_ARROW) {
    if(playerY < height) {
      swap(playerX, playerY, playerX, playerY + 1);
      playerY++;
    }
  }
}