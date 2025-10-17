// Planets and Moons
//Objects in Objects

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(70);
  myPlanet.display();
}

function mousePressed(){
  //regular click = add moon
  //click plus shift = repostion moon
  if(keyIsDown && keyCode === SHIFT){
    myPlanet = new Planet(width/2, height/2);
  }
  else {
    myPlanet.createMoon();
  }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY; 
  }
}

class Planet{
  constructor(x,y){
    this.x =x;  this.y = y;  this.s = 100;
    this.moons = [];
  }

  createMoon() {
    this.moons.push(new Moon(this.x,this.y));
  }

  display() {
    circle(this.x, this.y, this.s);

    for(let m of this.moons){
      m.update(this.x, this.y);
    }
  }
}

class Moon{
  constructor() {
    this.speed = random(1,5);
    this.angle = 0; this.orbitRadius = random(80, 250);
    this.s = random(5, 50);
  }

  display(x,y) {
    push();
    translate(x, y);
    rotate(this.angle);
    fill(random(255), random(255), random(255));
    circle(this.orbitRadius, 0, this.s);
    pop();

  }

  move() {
    this.angle += this.speed;
  }

  update(x,y) {
    this.move();
    this.display(x,y);
  }
}