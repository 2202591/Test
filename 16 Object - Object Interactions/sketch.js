// Object Object
let nodes = [];
let reach = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for(let n of nodes) {
    n.move();
    n.display();
    n.connect(nodes);
  }
}

function mousePressed() {
  nodes.push(new csNode(mouseX, mouseY));
  nodes.push(new csNode(mouseX + 100, mouseY));
  nodes.push(new csNode(mouseX - 100, mouseY));
  nodes.push(new csNode(mouseX, mouseY + 100));
  nodes.push(new csNode(mouseX, mouseY - 100));
  nodes.push(new csNode(mouseX + 100, mouseY + 100));
  nodes.push(new csNode(mouseX - 100, mouseY - 100));
  nodes.push(new csNode(mouseX - 100, mouseY + 100));
  nodes.push(new csNode(mouseX + 100, mouseY - 100));
}

class csNode {
  constructor(x, y) {
    this.x = x;   this.y = y;  this.size = 20;
    this.c = color(random(255), random(255), random(255));

    this.xTime = random(10);  this.yTime = random(10);
    this.timeShift = 0.01;  this.maxSpeed = 50;

  }

  display(){
    fill(this.c);
    noStroke();
    point(this.x, this.y, this.size);
  }

  move(){
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if(this.x < 0) this.x = width;
    else if(this.x > width) this.x = 0;

    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;
    if(this.y < 0) this.y = width;
    else if(this.y > width) this.y = 0;
  }

  connect(nodeArray) {
    stroke(230,10, 255);
    for(let n of nodeArray) {
      if(n !== this) {
        let d = dist(this.x, this.y, n.x, n.y);
        if(d < reach) {
          line(this.x, this.y, n.x, n.y);
        }
      }
    }
  }
}
