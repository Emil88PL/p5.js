
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
  bubble1 = new Bubble(200,200,40,212); // 2
  bubble2 = new Bubble(400,200,20,random(255)); // Arguments
  bubble3 = new Bubble(300,200,12,100);

}

function draw() {
  // Loop
  background(0);

  bubble1.show(); // 3
  bubble1.move();

  bubble2.show(); //// Passing Arguments to Parameters
  bubble2.move();

  bubble3.show();
  bubble3.move();
}

function mousePressed(){
  // Event

}

class Bubble {
  constructor(x,y,r,c) {  //Parameters
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
  }

  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.c);
    ellipse(this.x,this.y,this.r*2);
  }
}
