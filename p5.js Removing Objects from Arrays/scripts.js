
// JS Objects notations !!!

let bubbles = [];

function setup() {
  // Once
  createCanvas(600,400);

  for (let i = 0; i < 15; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,40);
    bubbles[i] = new Bubble(x,y,r);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++){
    if (bubbles[i].contains(mouseX,mouseY)){
      bubbles.splice(i,1);
    }
  }
}

function draw() {
  // Loop
  background(0);

  for (let i = bubbles.length -1 ; i >= 0 ; i--){
    if (bubbles[i].contains(mouseX,mouseY)){
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px,py){
    let d = dist(px,py,this.x,this.y);
    if (d < this.r) {
     return this
    }
  }

  clicked(px,py) {
    let d = dist(px,py,this.x,this.y);
    if (d < this.r) {
      this.brightness = 255;
    }

  }

  show() {
   stroke(255);
   strokeWeight(4);
   fill(this.brightness, 125);
   ellipse(this.x,this.y, this.r * 2);
  }

}
/*
function mousePressed() {
  // Event

}

function mouseDragged() {
  // Event

}
*/
