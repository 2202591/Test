// Cars Cars Cars

let carLength = 80;
let carWidth = 40;
let truckLength = 120;
let truckWidth = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function draw() {
  background(220);
  makeRoad();

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
  constructor(x, y, direction) {
    this.x = x; this.y = y;
    //type 0 = car, type 1 = truck
    this.type = random(0,1);   this.speed = speed;
    //false = facing east, true = facing west
    this.direction = direction;
    this.c = color(random(255), random(255), random(255));

  }

  display(){
    fill(this.c);
    if (this.type === 1) { //truck
      if (this.direction === false){ //facing east
        rect(this.x, this.y, );
      }
      else{

      }
      
    }
    else {
      if(this.direction === false) {
        rect(this.x, this.y, this.x + carLength, this.y + carWidth);
        rect()
      }
      else {
        rect(this.x, this.y, this.x - carLength, this.y - carWidth);
      }

    }



  }
}
