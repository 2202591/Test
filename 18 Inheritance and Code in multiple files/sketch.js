let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 200; i++) {
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new CircleObject(random(width), random(height)));
    objects.push(new LineObject());
  }
}

function draw() {
  background(220);
  for (let o of objects) {
    o.move();
    o.display();
  }
}
// parent file ("super class")

class AnimatedObject {
  constructor(x,y) {
    this.x = x;    this.y = y;
    this.size = 6;
  }

  move() {
    this.x += random(-2,2);
    this.y += random(-2,2);
  }

  display() {
    strokeWeight(this.size);
    point(this.x, this.y);
  }

}

//child class1
class CircleObject extends AnimatedObject {
  constructor(x,y) {
    super(x,y);
    //can still add on to the to what was in the parent class
    this.size = random(20,40);
  }

  //no mention of method (like move()), it will be same as parents method

  display() {//function overide; copies overtop of parent display
    if(dist(this.x, this.y, mouseX, mouseY) < this.size/2) {
      fill(0,255,0);
    }
    else {
      fill(255);
    }
    circle(this.x, this.y, this.size);

  }
}

// child class 2

class LineObject extends AnimatedObject {
  constructor() {
    super(random(width), random(height));
  }

  move() {// combo overide, but built on parent class version
    super.move();   // runs parent version of move
    this.x  -= 5;
    if (this.x < 0) {
      this.x = width;
    }
    this.y  -= 5;
    if (this.y < 0) {
      this.y = height;
    }
  }

  display() {
    if(mouseIsPressed) {
      strokeWeight(12);
    }
    else {
      strokeWeight(2);
    }

    line(this.x, this.y, this.x + 15, this.y + 15);
  }
}