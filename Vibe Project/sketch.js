let car1;
let car2;

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);

  car1 = new Car(150, height / 2, 0, color(255, 0, 0));
  car2 = new Car(450, height / 2, 180, color(0, 0, 255));
}

function draw() {
  background(220);

  // Update and show both cars
  car1.handleInput('W', 'S', 'A', 'D');
  car1.update();
  car1.display();

  car2.handleInput(UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);
  car2.update();
  car2.display();
}

class Car {
  constructor(x, y, angle, col) {
    this.pos = createVector(x, y);
    this.angle = angle; // in degrees
    this.col = col;

    this.speed = 0;
    this.maxSpeed = 5;
    this.acceleration = 0.2;
    this.friction = 0.1;
    this.turnSpeed = 4;

    this.width = 40;
    this.height = 20;
  }

  handleInput(forwardKey, backwardKey, leftKey, rightKey) {
    // Handle acceleration and deceleration
    if (keyIsDown(forwardKey)) {
      this.speed += this.acceleration;
    } else if (keyIsDown(backwardKey)) {
      this.speed -= this.acceleration;
    } else {
      // Apply friction to slow down gradually
      if (this.speed > 0) {
        this.speed -= this.friction;
        if (this.speed < 0) this.speed = 0;
      } else if (this.speed < 0) {
        this.speed += this.friction;
        if (this.speed > 0) this.speed = 0;
      }
    }

    // Limit speed
    this.speed = constrain(this.speed, -this.maxSpeed, this.maxSpeed);

    // Handle turning (only if moving)
    if (this.speed !== 0) {
      if (keyIsDown(leftKey)) {
        this.angle -= this.turnSpeed * (this.speed > 0 ? 1 : -1);
      }
      if (keyIsDown(rightKey)) {
        this.angle += this.turnSpeed * (this.speed > 0 ? 1 : -1);
      }
    }
  }

  update() {
    // Update position based on speed and angle
    let velocity = p5.Vector.fromAngle(radians(this.angle));
    velocity.setMag(this.speed);
    this.pos.add(velocity);

    // Keep car inside canvas
    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = constrain(this.pos.y, 0, height);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    rectMode(CENTER);
    fill(this.col);
    rect(0, 0, this.width, this.height);

    // Draw a simple windshield or front marker
    fill(255);
    triangle(
      this.width / 2,
      0,
      this.width / 4,
      -this.height / 4,
      this.width / 4,
      this.height / 4
    );
    pop();
  }
}
