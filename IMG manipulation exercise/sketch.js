let chip;
let race;
let nuit;
let hand;
let butterfly; 

function setup() {
  createCanvas(600, 3600);
  loadAssets();
}

async function loadAssets() {   //preloads images
  chip = await loadImage("assets/chip.jpg");
  race = await loadImage("assets/race.jpg");
  nuit = await loadImage("assets/nuit.jpg");
  hand = await loadImage("assets/hand.jpg");
  butterfly = await loadImage("assets/butterfly.jpg");
}

function setPixelOneD(pos, r, g, b){
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function setPixel(x, y, r, g, b){
  let index = (width*y + x) * 4;
  setPixelOneD(index, r, g ,b);
}

function draw() {  //creates images
  background(220);
  image(chip,0,0);
  image(race,0,600);
  image(nuit,0,1200);
  image(hand,0,1800);
  image(butterfly,0,2400);
  image(nuit,0,3000);
  loadPixels();
  //applies visual effects
  majorityColor();
  noGreen();
  fiveColor();
  mirror();
  xBlur();
  rotateCorners();
  updatePixels();
}

function getAvg(x,y) {   //gets average grey scale value for each pixel
  let i = (width*y + x) * 4;
  let r = pixels[i];
  let g = pixels[i+1];
  let b = pixels[i+2];
  return (r+b+g)/3;

}

function majorityColor() {  //finds the largest r,g, and b value and sets that pixel to it
  for(let x = 0; x < width; x++){
    for(let y = 0; y < 600; y++) {
      let i = (width*y + x) *4;
      let r = pixels[i];
      let g = pixels[i+1];
      let b = pixels[i+2];
      if(r<g && r>b) {  //red
        setPixel(x,y,255,0,0);
      }
      else if(g<r && g>b) { //green
        setPixel(x,y,0,255,0);
      }
      else if(b<r && b>g) { //blue
        setPixel(x,y,0,0,255);
      }
      else{  //blue
        setPixel(x,y,0,0,255);
      }
    }
  }
}

function noGreen() {  //removes all green value for each pixel
  for(let x = 0; x < width; x++){
    for(let y = 600; y < 1200; y++) {
      let i = (width*y + x) *4;
      let r = pixels[i];
      let b = pixels[i+2];
      if (x > width/2) {
        setPixel(x, y, r, 0, b);
      }
    }
  }
}

function fiveColor() { //sets each pixel to one of 5 colors based on grey scale value
  for(let x = 0; x < width; x++){
    for(let y = 1200; y < 1800; y++) {
      let avg = getAvg(x,y);
      if(avg >= 205) {  
        setPixel(x,y,170,230,220);
      }
      else if(avg >= 155) {
        setPixel(x,y,105,150,201);
      }
      else if(avg >= 105) {  
        setPixel(x,y,120,180,60);
      }
      else if(avg >= 55) {
        setPixel(x,y,130,30,130);
      }
      else{
        setPixel(x,y,90,10,50);
      }
    }
  }
}

function mirror() {  //mirrors the image
  for(let x = 0; x < width; x++){
    for(let y = 1800; y < 2400 ; y++) {
      let i = (width*y + x) *4;
      let r = pixels[i];
      let g = pixels[i+1];
      let b = pixels[i+2];
      if (x > width/2) {
        setPixel(width-x, y, r, g, b);
      }
    }
  }
}

function rotateCorners() {  //moves each corner clockwise
  let srcPixels = structuredClone(pixels);  //clones base pixels
  for(let x = 0; x < width; x++){
    for(let y = 2400; y < 3000; y++) {
      let i = (width*y + x) *4;
      let r = srcPixels[i];
      let g = srcPixels[i+1];
      let b = srcPixels[i+2];
      if(x < width/2 && y < 2700) {  //top left to top right
        setPixel(x + width/2, y, r, g, b);
      }
      if(x > width/2 && y < 2700) {  //top right to bottom right
        setPixel(x, y + 300, r, g, b);
      }
      if(x > width/2 && y > 2700) {  //bottom right to bottom left
        setPixel(x - width/2 + 1, y-1, r, g, b);
      }
      if(x < width/2 && y > 2700) {  //bootom left to top left
        setPixel(x, y - 300, r, g, b);
      }
    }
  }
}

function xBlur() {  //takes average r,g,b values for radius amount of pixels diagonal
  // for each point and changes its value to it
  let radius = 10;
  let srcPixels = structuredClone(pixels);  //clones base pixels
  for(let x = 0; x < width; x++){
    for(let y = 3000; y < 3600; y++) {
      let averageR = 0;
      let averageG = 0;
      let averageB = 0;
      for(let r = -radius ; r < radius + 1; r++) {
        if(r !== 0){
          let i = (width*(y+r) + (x+r)) * 4;
          averageR += srcPixels[i];
          averageG += srcPixels[i+1];
          averageB += srcPixels[i+2];
        } 
      }
      for(let r = -radius ; r < radius + 1; r++) {
        if(r !== 0){
          let i = (width*(y+r) + (x-r)) * 4;
          averageR += srcPixels[i];
          averageG += srcPixels[i+1];
          averageB += srcPixels[i+2];
        } 
      }
      averageR = averageR/(radius*2);
      averageG = averageG/(radius*2);
      averageB = averageB/(radius*2);
      setPixel(x,y,averageR,averageG,averageB);
    }
  }
}

