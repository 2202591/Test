// Project Title

let myBook;
let bookshelf = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("Harry Potter", "Me", 1234123412341, "leatherbound", 500, 500);
}

function draw() {
  background(220);
  myBook.display();
}

class Book {
  //constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    //"softcover", "hardcover", "leatherbound"
    this.pages = pages;
    this.x = x;
    this.pickedUp = false;
    this.left; this.right; this.top; this.bottom;
    this.updateSides();
  }

  updateSides() {
    this.top = height/2 - 75;
    this.bottom = height/2 + 75;
    this.left = this.x - this.pages / 20;
    this.right = this.x + this.pages / 20;
  }

  mouseIsOver() {
    if (mouseX > this.left && mouseX < this.right) {
      if (mouseY > this.top && mouseY < this.bottom) {
        return true;
      }
    }
    return false;
  }

  //class method
  display() {
    this.updateSides();
    rectMode(CENTER);            textAlign(CENTER, CENTER);
    textSize(20);

    switch(this.cover) {
      case "softcover":
        fill(250,200,150);    break;
      case "hardcover":
        fill(120,255,255);    break;
      case "leatherbound":
        fill(150, 100, 15);   break;
    }

    push();
    translate(this.x, height/2);
    if(this.mouseIsOver()) {
      scale(1.1);
    }
    rect(0,0, this.pages / 10, 150);
    fill(255);
    text(this.title[0], 0, -50);
    pop();

  }
}