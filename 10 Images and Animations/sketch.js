let pinImages = [];
let currImage = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
}

async function loadAssets(){
  for (let i = 0; i < 9; i++) {
    pinImages.push(await loadImage("Assets/pin-0"+i+".png"));
  }

}

function draw() {
  background(0);
  // animate();

  currImage += 1;
  if (currImage > 8) currImage = 0;

  image(pinImages[currImage], width/2, height*0.5);
}

function animate() {
  imageMode(CENTER);
  for (i = 0; i < 9; i++){
    image(pinImages[i], width/2, height*0.5);
  }
}