//Sorting practice

let values = [];
const ARRAY_SIZE = 40;

function setup() {
  noCanvas();
  populateArray();
  print(values);
  bubbleSort();
  print(values);
}

function draw() {
  background(220);
}

function populateArray() {
  for(let i = 0; i < ARRAY_SIZE; i++) {
    values.push(floor(random(1000)));
  }
}

function selectionSort() {
  for(let i = 0; i < values.length - 1; i++) {
    let min = values[i];
    let minIndex = i;
    for(let start = i + 1; start < values.length; start++) {
      let cur = values[start];
      if(cur < min) {
        min = cur;
        minIndex = start;
      }
      let temp = values[i];
      values[i] = values[minIndex];
      values[minIndex] = temp;
    }
  }
}

function bubbleSort() {
  for(let i = 0; i < values.length; i ++) {
    for(let z = 0; z < values.length; z ++) {
      if(values[z] > values[z + 1] && i < values.length - 1) {
        let temp = values[z];
        values[z] = values[z + 1];
        values[z + 1] = temp;
      }
    }
  }

}