

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(220);
  orbitControl();
  lights();
  fill(100,255,100);
  angle = map(mouseX,0,width,-120,120);
  
  for(let i = 0; i < 360; i+= 30) {
    push();
    rotateY(radians(i));
    drawBox(100);
    pop();
  }
}
let angle = 10;

function drawBox(s) {
  if (s> 3) {
    rotateZ(radians(angle));
    translate(s*1.5,0);
    box(s);
    drawBox(s*0.8);
  }
}