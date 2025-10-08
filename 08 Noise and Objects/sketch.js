//Noise and Objects

let ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball1 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball2 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball3 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball4 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball5 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball6 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball7 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball8 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball9 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball10 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball11 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball12 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball13 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball14 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball15 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball16 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball17 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball18 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball19 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball20 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball21 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball22 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball23 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball24 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball25 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball26 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball27 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball28 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball29 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball30 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball31 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball32 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball33 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball34 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball35 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball36 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball37 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball38 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball39 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball40 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball41 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball42 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball43 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball44 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball45 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball46 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball47 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball48 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball49 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball50 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball51 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball52 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball53 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball54 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball55 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball56 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball57 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball58 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball59 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball60 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball61 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball62 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball63 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball64 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball65 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball66 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball67 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball68 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball69 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball70 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball71 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball72 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball73 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball74 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball75 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball76 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball77 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball78 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball79 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball80 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball81 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball82 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball83 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball84 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball85 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball86 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball87 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball88 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball89 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball90 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball91 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball92 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball93 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball94 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball95 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball96 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball97 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball98 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball99 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c2: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball100 = {
    //object notation
    x: width/2, y: height/2, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  
  
}

function draw() {
  // background(220);
  moveBall(ball1);
  moveBall(ball2);
  moveBall(ball3);
  moveBall(ball4);
  moveBall(ball5);
  moveBall(ball6);
  moveBall(ball7);
  moveBall(ball8);
  moveBall(ball9);
  moveBall(ball10);
  moveBall(ball11);
  moveBall(ball12);
  moveBall(ball13);
  moveBall(ball14);
  moveBall(ball15);
  moveBall(ball16);
  moveBall(ball17);
  moveBall(ball18);
  moveBall(ball19);
  moveBall(ball20);
  moveBall(ball21);
  moveBall(ball22);
  moveBall(ball23);
  moveBall(ball24);
  moveBall(ball25);
  moveBall(ball26);
  moveBall(ball27);
  moveBall(ball28);
  moveBall(ball29);
  moveBall(ball30);
  moveBall(ball31);
  moveBall(ball32);
  moveBall(ball33);
  moveBall(ball34);
  moveBall(ball35);
  moveBall(ball36);
  moveBall(ball37);
  moveBall(ball38);
  moveBall(ball39);
  moveBall(ball40);
  moveBall(ball41);
  moveBall(ball42);
  moveBall(ball43);
  moveBall(ball44);
  moveBall(ball45);
  moveBall(ball46);
  moveBall(ball47);
  moveBall(ball48);
  moveBall(ball49);
  moveBall(ball50);
  moveBall(ball51);
  moveBall(ball52);
  moveBall(ball53);
  moveBall(ball54);
  moveBall(ball55);
  moveBall(ball56);
  moveBall(ball57);
  moveBall(ball58);
  moveBall(ball59);
  moveBall(ball60);
  moveBall(ball61);
  moveBall(ball62);
  moveBall(ball63);
  moveBall(ball64);
  moveBall(ball65);
  moveBall(ball66);
  moveBall(ball67);
  moveBall(ball68);
  moveBall(ball69);
  moveBall(ball70);
  moveBall(ball71);
  moveBall(ball72);
  moveBall(ball73);
  moveBall(ball74);
  moveBall(ball75);
  moveBall(ball76);
  moveBall(ball77);
  moveBall(ball78);
  moveBall(ball79);
  moveBall(ball80);
  moveBall(ball81);
  moveBall(ball82);
  moveBall(ball83);
  moveBall(ball84);
  moveBall(ball85);
  moveBall(ball86);
  moveBall(ball87);
  moveBall(ball88);
  moveBall(ball89);
  moveBall(ball90);
  moveBall(ball91);
  moveBall(ball92);
  moveBall(ball93);
  moveBall(ball94);
  moveBall(ball95);
  moveBall(ball96);
  moveBall(ball97);
  moveBall(ball98);
  moveBall(ball99);
  moveBall(ball100);
}

function moveBall(b) {
  // b -> ball type object
  // updates postion of provided ball

  //generate random position change  (x and y)

  let dx = noise(b.timeX);
  dx = map(dx, 0, 1, -5, 5);
  b.timeX += 0.005;

  let dy = noise(b.timeY);
  dy = map(dy, 0, 1, -5, 5);
  b.timeY += 0.005;

  b.x += dx;
  b.y += dy;

  if(b.x < 0){
    b.x += width;
  }
  else if(b.x > width) {
    b.x -+ width;
  }

  if(b.y < 0){
    b.y += height;
  }
  else if(b.y > height) {
    b.y -+ height;
  }

  fill(b.c);
  circle(b.x, b.y, b.size);

}
