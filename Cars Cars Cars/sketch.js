// Cars Cars Cars
//Corbin Potter
//CSC 30
//Mr. Scott
//November 4, 2025

let vehicleLength = 80;       //vehicle width and lengths
let vehicleWidth = 40;
let eastbound = [];
let westbound = [];
let trafficLight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  for(let i = 0; i < 20; i++) {    //populates west and east bound lane arrays with 20 cars each
    eastbound.push(new Vehicle(0));
  }
  for(let i = 0; i < 20; i++) {
    westbound.push(new Vehicle(1));
  }
  trafficLight = new TrafficLight();  //creates trafficlight

}

function draw() {
  background(220);
  drawRoad();  //calls function that draws road
  for(let e of eastbound) { //updates west and east bound cars
    e.action();
  }
  for(let w of westbound) {
    w.action();
  }
  trafficLight.display();   //displays traffic light
  
}

function drawRoad(){  //draws road
  fill(90);
  rect(0, height * 0.15, width, height * 0.85);
  fill(255, 255, 0);
  for (let i = 0; i < width; i += 60){
    rect(i, height/2 + 5, i + 40, height/2 - 5);
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    if (keyIsDown && keyCode !== SHIFT) {  //populates eastbound lane on shift left-click
      eastbound.push(new Vehicle(0));
    }
    else {  //populates westbound lane on regular left-click
      westbound.push(new Vehicle(1));
    }
    mouseButton = CENTER;
  }

}

class Vehicle{   //vehicle class
  constructor(direction) {
    this.x = random(width);
    //type 1 = car, type 2 = truck
    this.type = random(1);   this.type = round(this.type);
    this.speed = random(1,15);
    //0 = east, 1 = west
    this.direction = direction;
    this.timer = 0;
    this.c = color(random(255), random(255), random(255));
    if (direction === 0) {
      this.y = (random(height * 0.55, height * 0.85));
    }  //set y values for each lane
    else {
      this.y = (random(height * 0.15, height * 0.45));
    }
  }

  action() {  //calls all methods
    this.display();
    this.changeColor();
    this.speedUp();
    this.speedDown();
    this.move();   
  }

  display(){  //creates light
    if (this.type === 1) { //truck
      fill(this.c);
      if (this.direction === 0){ //facing east
        rect(this.x, this.y, this.x + vehicleLength - 25, this.y - vehicleWidth);
        rect(this.x + vehicleLength - 20, this.y, this.x + vehicleLength, this.y - vehicleWidth);
      }
      else{ // facing west
        rect(this.x, this.y, this.x - vehicleLength + 25, this.y + vehicleWidth);
        rect(this.x - vehicleLength + 20, this.y, this.x - vehicleLength, this.y + vehicleWidth);

      }
      
    }
    else {  //car
      fill(255);
      if(this.direction === 0) { //facing east
        rect(this.x + 10, this.y + 3, this.x + 25, this. y - 43);
        rect(this.x + vehicleLength - 10, this.y + 3, this.x + vehicleLength - 25, this.y - 43);
        fill(this.c);
        rect(this.x, this.y, this.x + vehicleLength, this.y - vehicleWidth);
      }
      else { //facing west
        rect(this.x - 10, this.y - 3, this.x - 25, this.y + 43);
        rect(this.x - vehicleLength + 10, this.y - 3, this.x - vehicleLength + 25, this.y + 43);
        fill(this.c);
        rect(this.x, this.y, this.x - vehicleLength, this.y + vehicleWidth);
      }

    }

  }

  move() {
    if (keyIsPressed && keyCode === 32) {  //no movement when space pressed
      this.timer = 120; //starts counter for 2 seconds
    }
    else if(this.timer > 0) {
      this.x += 0;
    }

    else if (this.direction === 0) {  //facing east
      this.x += this.speed;
      if (this.x > width) {
        this.x = 0 - vehicleWidth;
      }
    }
    else {  //facing west
      this.x -= this.speed;
      if (this.x < 0) {
        this.x = width + vehicleWidth;
      }
    }
    this.timer--;
  }

  speedUp() {
    if (round(random(100)) === 60 && this.speed < 15) {
      this.speed++;  //random chance to speed up
    }
  }

  speedDown() {
    if (round(random(100)) === 45 && this.speed > 1) {
      this.speed--;  //random chance to slow down
    }
  }

  changeColor() {
    if (round(random(100)) === 30) {
      this.c = color(random(255), random(255), random(255));
    }   //random chance to change color
  }
  
}

class TrafficLight {  //traffic light class
  constructor() {
    this.x = width*0.075;   this.y = height*0.075;
    this.timer = 0;
  }

  display() { //creates light
    if (keyIsPressed && keyCode === 32) { //on space pressed light turns red
      this.timer = 120; //timer for 2 seconds starts
      fill(255, 0, 0);
    }
    else {
      if (this.timer > 0) {
        fill(255, 0, 0); //red
      }
      else{
        fill(0, 255,0); //green
      }
    }
    this.timer--
    circle(this.x, this.y, 140);
  }
}
