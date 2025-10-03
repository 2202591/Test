let bubbles = [];
let bubbleSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
}

function populateArray() {
  for (let x = 0; x < width; x += bubbleSize) {
      for (let y = 0; y < height; y += bubbleSize) {
        let b = {
          x: x,    y: y
        };
        bubbles.push(b);
      }
    }
}

function showBubbles() {
  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];
    circle(b.x, b.y, bubbleSize);

    if (dist(b.x, b.y, mouseX, mouseY) <  bubbleSize / 2) {
      //.splice(pos, #of items, replacement)
      bubbles.splice(i, 1);
    }
  }
}

function draw() {
  background(220);
  showBubbles();
}
