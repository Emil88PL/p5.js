let canvas;
let mic;  // mic

function windowResized() {
  // console.log('resized');
  resizeCanvas(windowWidth,windowHeight);
}

function setup() {
  canvas =  createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  mic = new p5.AudioIn(); //mic
  mic.start();            //mic
}

function draw() {
  background(0);
  let vol = mic.getLevel(); //mic
  ellipse(width/2, height/2, vol * windowWidth); //mic
}
