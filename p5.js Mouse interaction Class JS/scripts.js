
// JS Objects notations !!!

  let bubbles = [];

function setup() {
  // Once
  createCanvas(600,400);

  for (let i = 0; i < 5; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,40);
    bubbles[i] = new Bubble(x,y,r);
  }

}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].clicked(mouseX,mouseY);
  }
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
    this.brightness = 0;
  }

  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  clicked(px,py) {
    let d = dist(px,py,this.x,this.y);
    if (d < this.r) {
      this.brightness = random(100);
    }

  }

  show() {
   stroke(255);
   strokeWeight(4);
   fill(this.brightness, 125);
   //  noStroke();
  //  fill(255,10);
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


/*
function mouseDragged() {
  // Event
  let r = random(10,50);
  let b = new Bubble (mouseX,mouseY,r);
  bubbles.push(b);
}

*/
