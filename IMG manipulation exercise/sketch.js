let chip;
let race;
let nuit;
let hand;
let butterfly; 

function setup() {
  createCanvas(600, 3600);
  loadAssets();
}

async function loadAssets() {
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

function draw() {
  background(220);
  image(chip,0,0);
  image(race,0,600);
  image(nuit,0,1200);
  image(hand,0,1800);
  image(butterfly,0,2400);
  image(nuit,0,3000);
  loadPixels();

  majorityColor();
  noGreen();
  fiveColor();
  mirror();
  xBlur();
  updatePixels();
}

function getAvg(x,y) {
  let i = (width*y + x) * 4;
  let r = pixels[i];
  let g = pixels[i+1];
  let b = pixels[i+2];
  return (r+b+g)/3;

}

function majorityColor() {
  for(let x = 0; x < width; x++){
    for(let y = 0; y < 600; y++) {
      let i = (width*y + x) *4;
      let r = pixels[i];
      let g = pixels[i+1];
      let b = pixels[i+2];
      if(r<g && r>b) {
        setPixel(x,y,255,0,0);
      }
      else if(g<r && g>b) {
        setPixel(x,y,0,255,0);
      }
      else if(b<r && b>g) {
        setPixel(x,y,0,0,255);
      }
      else{
        setPixel(x,y,0,0,255);
      }
    }
  }
}

function noGreen() {
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

function fiveColor() {
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

function mirror() {
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

// function rotateCorners() {
//   let srcPixels = structuredClone(pixels);
//   for(let x = 0; x < width; x++){
//     for(let y = 2400; y < 3000; y++) {
      
//     }
//   }
// }

function xBlur() {
  let radius = 10;
  for(let x = 0; x < width; x++){
    for(let y = 3000; y < 3600; y++) {
      let averageR;
      let averageG;
      let averageB;
      for(let r = -radius/2; r < radius/2; r++) {
        let i = (width*(y+r) + (x+r)) * 4;
        averageR += pixels[i];
        averageG += pixels[i+1];
        averageB += pixels[i+2];
      }
      averageR = averageR/radius;
      averageG = averageG/radius;
      averageB = averageB/radius;
      setPixel(x,y,averageR,averageG,averageB);
    }
  }
}

