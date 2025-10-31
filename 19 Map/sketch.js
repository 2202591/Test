//Data structure and reading file

let textFile;
let imgText, rows, cols, colorMap;

function preload() {
  textFile = loadStrings("assets/info.txt");
  imgText = loadStrings("assets/image.text");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // processText();

  rows = imgText.length;
  cols = imgText[0].length;

  colorMap = new Map([
    ["b", "black"],
    ["w", color(255)]
  ]);

  drawImage();
}

function drawImage() {
  let pixelSize = 50;

  for (let y = 0; y < rows; y++) {
    let currentRow = imgText[y];
    for(let x = 0; x < cols; x++) {
      let currentKey = currentRow[x];
      fill(colorMap.get(currentKey));
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
    }
  }
}

function processText() {
  //split
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  print("SPLIT INTO CHARACTERS");
  let splitChars = textFile[1].split("");
  print(splitChars);

  print("SPLLIT INTO CHARACTERS");
  let spreadChars = [...textFile[2]];
  print(spreadChars);
}

function draw() {
  // background(220);
}

