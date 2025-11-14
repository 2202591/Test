let pilot;

function setup() {
  createCanvas(891, 892);
  loadAssets();
  pixelDensity(1);
}

async function loadAssets() {
  pilot = await loadImage("assets/aviator.png");
}

function setPixelOneD(pos, r, g, b){
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function setPixelColor(x, y, r, g, b){
  let index = (width*y + x) * 4;
  setPixelOneD(index, r, g ,b);

}

function draw() {
  background(0);
  image(pilot,0,0);
  loadPixels();
  // boost();
  greyScale();
  textImage();
  // updatePixels();
}

function textImage() {
  fill(255);
  for(let x = 0; x < width; x+=10){
    for(let y = 0; y < height; y+=10) {
      let avg = getAverage(x,y);
      if (avg > 200)  text("%", x, y);
      else if(avg > 100) text("|", x, y)
      else text("0",x ,y );
    }
  }
}

function getAverage(x,y) {
  let i = (width*y + x) * 4;
  let r = pixels[i];
  let g = pixels[i+1];
  let b = pixels[i+2];
  return (r+b+g)/3;

}

function greyScale() {
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++) {
      let avg = getAverage(x,y);
      setPixelColor(x, y, avg, avg, avg);
  
    }
  }
}

function boost(){
  let boost = map(mouseX, 0, width, -100, 100);
  for(let i = 0; i < pixels.length; i+=4) {
    let r = pixels[i] + boost;
    let g = pixels[i+1] + boost;
    let b = pixels[i+2] + boost;
    setPixelOneD(i, r, g, b);
  }

}
