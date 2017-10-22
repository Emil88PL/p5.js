
// JS Objects notations !!!

let bubbles = [];

function setup() {
  // Once
  createCanvas(600,400);

}

function mouseDragged() {
//  for (let i = 0; i < bubbles.length; i++){
  //  let x = random(width);
  //  let y = random(height);
    let r = 7;
    let b = new Bubble(mouseX,mouseY,r);
    bubbles.push(b);

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
 // lenght
 if (bubbles.length > 52) {
   bubbles.splice(0,1);
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
   strokeWeight(2);
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
