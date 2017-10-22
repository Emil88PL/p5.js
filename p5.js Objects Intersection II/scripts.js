
// JS Objects notations !!!
let bubbels = [];

function setup() {
  // Once
  createCanvas(600,400);
  for (let i = 0; i < 50; i++) {
  bubbels[i] = new Bubble(random(width),random(height));
  }
}

function draw() {
  // Loop
  background(40);
for (let i = 0; i < bubbels.length; i++) {
  bubbels[i].display();
  bubbels[i].update();
    for (let j = 0; j < bubbels.length; j++) {
      if (i != j && bubbels[i].intersects(bubbels[j])) {
        bubbels[i].changeColor();
        bubbels[j].changeColor();
       }
    }
}

}

function Bubble(x,y) {
  this.x = x;
  this.y = y;
  this.r = 7;
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
