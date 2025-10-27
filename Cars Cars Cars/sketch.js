// Cars Cars Cars

let vehicleLength = 80;
let vehicleWidth = 40;
let eastbound = [];
let westbound = [];
let trafficLight;
let initial;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  for(let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(0));
  }
  for(let i = 0; i < 20; i++) {
    westbound.push(new Vehicle(1));
  }
  trafficLight = new TrafficLight(0);

}

function draw() {
  background(220);
  drawRoad();
  mousePressed();
  keyPressed();
  for(let e of eastbound) {
    e.action();
  }
  for(let w of westbound) {
    w.action();
  }
  trafficLight.display();
}

function drawRoad(){
  fill(90);
  rect(0, height * 0.15, width, height * 0.85);
  fill(255, 255, 0);
  for (let i = 0; i < width; i += 60){
    rect(i, height/2 + 5, i + 40, height/2 - 5);
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    if (keyIsDown && keyCode !== SHIFT) {
      eastbound.push(new Vehicle(0));
    }
    else {
      westbound.push(new Vehicle(1));
    }
    mouseButton = CENTER;
  }

}

function keyPressed() {
  if(keyCode === 32) {
    trafficLight = new TrafficLight(1);
    frameRate(0);
  }

}


class Vehicle{
  constructor(direction) {
    this.x = random(width);
    //type 1 = car, type 2 = truck
    this.type = random(1);   this.type = round(this.type);
    this.speed = random(1,15);
    //0 = east, 1 = west
    this.direction = direction;
    this.c = color(random(255), random(255), random(255));
    if (direction === 0) {
      this.y = (random(height * 0.55, height * 0.85));
    }
    else {
      this.y = (random(height * 0.15, height * 0.45));
    }
  }

  action() {
    this.display();
    this.changeColor();
    this.speedUp();
    this.speedDown();
    this.move();
  }

  display(){
    if (this.type === 1) { //truck
      fill(this.c);
      if (this.direction === 0){ //facing east
        rect(this.x, this.y, this.x + vehicleLength - 25, this.y - vehicleWidth);
        rect(this.x + vehicleLength - 20, this.y, this.x + vehicleLength, this.y - vehicleWidth);
      }
      else{
        rect(this.x, this.y, this.x - vehicleLength + 25, this.y + vehicleWidth);
        rect(this.x - vehicleLength + 20, this.y, this.x - vehicleLength, this.y + vehicleWidth);

      }
      
    }
    else {
      fill(255);
      if(this.direction === 0) {
        rect(this.x + 10, this.y + 3, this.x + 25, this. y - 43);
        rect(this.x + vehicleLength - 10, this.y + 3, this.x + vehicleLength - 25, this.y - 43);
        fill(this.c);
        rect(this.x, this.y, this.x + vehicleLength, this.y - vehicleWidth);
      }
      else {
        rect(this.x - 10, this.y - 3, this.x - 25, this.y + 43);
        rect(this.x - vehicleLength + 10, this.y - 3, this.x - vehicleLength + 25, this.y + 43);
        fill(this.c);
        rect(this.x, this.y, this.x - vehicleLength, this.y + vehicleWidth);
      }

    }



  }

  move() {
    if (this.direction === 0) {
      this.x += this.speed;
      if (this.x > width) {
        this.x = 0 - 0 - vehicleWidth;
      }
    }
    else {
      this.x -= this.speed;
      if (this.x < 0) {
        this.x = width + vehicleWidth;
      }
    }

  }

  speedUp() {
    if (round(random(100)) === 60 && this.speed < 15) {
      this.speed++;
    }
  }

  speedDown() {
    if (round(random(100)) === 45 && this.speed > 1) {
      this.speed--;
    }
  }

  changeColor() {
    if (round(random(100)) === 30) {
      this.c = color(random(255), random(255), random(255));
    }
  }

}

class TrafficLight {
  constructor(type) {
    this.x = width*0.075; this.y = height*0.075;
    this.type = type;
  }

  display() {
    if (this.type === 0) {
      fill(0, 255, 0);
    }
    else {
      fill(255, 0 ,0);
    }
    circle(this.x, this.y, 140);
  }
}
