// Cars Cars Cars

let vehicleLength = 80;
let vehicleWidth = 40;
let eastbound = [];
let westbound = [];
let myVehicle;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  myVehicle = new Vehicle(400, 1);
  for(let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(random(height * 0.2, height * 0.45)), 0);
  }
  for(let i = 0; i < 20; i++) {
    westbound.push(new Vehicle(random(height * 0.55, height * 0.8)), 1);
  }

}

function draw() {
  background(220);
  makeRoad();
  myVehicle.action();
  
}

function makeRoad(){
  fill(90);
  rect(0, height * 0.2, width, height * 0.8);
  fill(255, 255, 0);
  for (let i = 0; i < width; i += 60){
    rect(i, height/2 + 5, i + 40, height/2 - 5);
  }
}

class Vehicle{
  constructor(y, direction) {
    this.x = random(width); this.y = y;
    //type 1 = car, type 2 = truck
    this.type = random(2);   this.speed = random(1,15);
    //0 = facing east, 1 = facing west
    this.direction = direction;
    this.c = color(random(255), random(255), random(255));
  }

  action() {
    this.move();
    this.display();
  }

  display(){
    if (this.type === 1) { //truck
      fill(this.c);
      if (this.direction === 0){ //facing east
        rect(this.x, this.y, this.x + vehicleLength, this.y - vehicleWidth);
        rect(this.x + vehicleLength + 5, this.y, this.x + vehicleLength + 25, this.y - truckWidth);
      }
      else{
        rect(this.x, this.y, this.x - vehicleLength, this.y + vehicleWidth);
        rect(this.x - vehicleLength - 5, this.y, this.x - vehicleLength - 25, this.y + truckWidth);

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

}
