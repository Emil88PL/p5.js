
// JS Objects notations !!!
/*
let bubble = {
  x: 300,
  y: 200
};
*/
let bubble1;  // 1
let bubble2;
let bubble3;

function setup() {
  // Once
  createCanvas(600,400);
  bubble1 = new Bubble(); // 2
  bubble2 = new Bubble();
  bubble3 = new Bubble();

}

function draw() {
  // Loop
  background(0);

  bubble1.show(); // 3
  bubble1.move();

  bubble2.show();
  bubble2.move();

  bubble3.show();
  bubble3.move();
}


function mousePressed(){
  // Event

}


class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
  }

  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x,this.y,24,24);
  }
}
