let shared = {painting: [], invert:false};
let c;

const color = [
  "#ee6666",
  "#eeee66",
  "#66ee66",
  "#66eeee",
  "#6666ee",
  "#ee66ee"
];

function pickColor() {
  return random(color);
}

function preload() {
  partyConnect("wss://demoserver.p5party.org","cs30party");
  shared = partyLoadShared("shared", shared);
}

function mousePressed(){
  c = pickColor();
  shared.painting.push([mouseX, mouseY, c]);
}

function renderPaint() {
  for(let p of shared.painting) {
    fill(p[2]);
    circle(p[0],p[1],30);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = pickColor();
}

function draw() {
  background(220);
  renderPaint();
}
