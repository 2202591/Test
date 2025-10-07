// Tank Battle - Stationary Rotating Tanks
// Player 1: rotate with A/D, shoot SPACE
// Player 2: rotate with LEFT/RIGHT, shoot ENTER

let tank1, tank2;
let bullets = [];
let walls = [];

function setup() {
  createCanvas(800, 500);

  // Tanks
  tank1 = new Tank(120, height / 2, 0, color(0, 180, 255));   // Blue
  tank2 = new Tank(width - 120, height / 2, 180, color(255, 100, 100)); // Red

  // Outer arena walls
  walls.push(new Wall(width / 2, 25, width - 40, 20)); // Top
  walls.push(new Wall(width / 2, height - 25, width - 40, 20)); // Bottom
  walls.push(new Wall(25, height / 2, 20, height - 80)); // Left
  walls.push(new Wall(width - 25, height / 2, 20, height - 80)); // Right

  // Inner walls
  walls.push(new Wall(width / 2, height / 2, 100, 20));
  walls.push(new Wall(width / 4, height / 3, 20, 100));
  walls.push(new Wall(width * 0.75, height / 3, 20, 100));
  walls.push(new Wall(width / 2, height * 0.75, 150, 20));
  walls.push(new Wall(width / 3, height * 0.65, 20, 120));
  walls.push(new Wall(width * 0.65, height * 0.45, 150, 20));

  // Additional walls directly in front of the tanks
  walls.push(new Wall(tank1.x + 60, tank1.y, 20, 60)); // Blue tank front
  walls.push(new Wall(tank2.x - 60, tank2.y, 20, 60)); // Red tank front
}

function draw() {
  background(170, 220, 170);

  for (let w of walls) w.display();

  tank1.update();
  tank2.update();
  tank1.display();
  tank2.display();

  // Bullets
  for (let b of bullets) {
    b.update();

    for (let w of walls) {
      if (w.hits(b)) b.bounce(w);
    }

    b.display();
  }
}

// ================= CONTROLS =================
// Player 1 rotates: A/D + shoot SPACE
function keyPressed() {
  if (keyCode === 65) tank1.turnL = true;    // A
  if (keyCode === 68) tank1.turnR = true;    // D
  if (keyCode === 32) tank1.shoot();         // SPACE

  // Player 2 rotates: LEFT/RIGHT + shoot ENTER
  if (keyCode === LEFT_ARROW) tank2.turnL = true;
  if (keyCode === RIGHT_ARROW) tank2.turnR = true;
  if (keyCode === ENTER) tank2.shoot();
}

function keyReleased() {
  if (keyCode === 65) tank1.turnL = false;
  if (keyCode === 68) tank1.turnR = false;

  if (keyCode === LEFT_ARROW) tank2.turnL = false;
  if (keyCode === RIGHT_ARROW) tank2.turnR = false;
}

// ================= CLASSES =================
class Tank {
  constructor(x, y, angle, col) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.col = col;
    this.turnL = false;
    this.turnR = false;
    this.reload = 0;
  }

  update() {
    // Rotation only
    if (this.turnL) this.angle -= 3;
    if (this.turnR) this.angle += 3;

    if (this.reload > 0) this.reload--;
  }

  shoot() {
    if (this.reload === 0) {
      let bx = this.x + cos(radians(this.angle)) * 20;
      let by = this.y + sin(radians(this.angle)) * 20;
      bullets.push(new Bullet(bx, by, this.angle));
      this.reload = 30;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.angle));
    rectMode(CENTER);
    fill(this.col);
    rect(0, 0, 30, 20, 5);
    fill(50);
    rect(15, 0, 18, 4); // barrel
    pop();
  }
}

class Bullet {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.vx = cos(radians(angle)) * 6;
    this.vy = sin(radians(angle)) * 6;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  bounce(wall) {
    let horizontal = wall.w > wall.h;
    if (horizontal) this.vy *= -1;
    else this.vx *= -1;
  }

  display() {
    fill(0);
    ellipse(this.x, this.y, 8);
  }
}

class Wall {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    fill(120, 90, 60);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }

  hits(bullet) {
    return (
      bullet.x > this.x - this.w / 2 &&
      bullet.x < this.x + this.w / 2 &&
      bullet.y > this.y - this.h / 2 &&
      bullet.y < this.y + this.h / 2
    );
  }
}
