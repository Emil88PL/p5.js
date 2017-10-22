
// JS Objects notations !!!
let b1;
let b2;

function setup() {
  // Once
  createCanvas(600,400);
  b1 = new Bubble(350,200);
  b2 = new Bubble(250,200);
}

function draw() {
  // Loop
  background(40);

  b1.display();
  b2.display();
  b1.update();
  b2.update();
if (b1.intersects(b2)) {
  b1.changeColor();
  b2.changeColor();
 }
}

function Bubble(x,y) {
  this.x = x;
  this.y = y;
  this.r = 48;
  this.col = color(255,0,220);

  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255));
  }

  this.intersects = function(other) {
    var d = dist(this.x,this.y,other.x,other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x,this.y,this.r *2);
  }

  this.update = function() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
}


function mousePressed() {
  // Even
}

function mouseDragged() {
  // Event
}
