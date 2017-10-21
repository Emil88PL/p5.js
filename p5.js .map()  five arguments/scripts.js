
// JS Objects notations !!!

let r = 0;
let b = 255;

function setup() {
  // Once
  createCanvas(600,400);

  }

function draw(){
  // Loop
  r = map(mouseX,0,600,0,255);
  b = map(mouseY,0,600,0,255);
  background(r,0,b);
  // ellipse
  fill(250,118,222);
  ellipse(mouseX,200,64,64);

}

function mousePressed(){
  // Event

}
