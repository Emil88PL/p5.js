
// JS Objects notations !!!

let bubbles = [];

function setup() {
  // Once
  createCanvas(600,400);

  /*
  for (let i = 0; i < 50; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,40);
    bubbles[i] = new Bubble(x,y,r);
  }
  */
}

function draw() {
  // Loop
  background(0);

  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
  }

}

class Bubble {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  show() {
  //  stroke(255);
  //  strokeWeight(4);
    noStroke();
    fill(255,10);
    ellipse(this.x,this.y, this.r * 2);
  }

}
/*
function mousePressed() {
  // Event
  let r = random(10,50);
  let b = new Bubble (mouseX,mouseY,r);
  bubbles.push(b);
}
*/


function mouseDragged() {
  // Event
  let r = random(10,50);
  let b = new Bubble (mouseX,mouseY,r);
  bubbles.push(b);
}
