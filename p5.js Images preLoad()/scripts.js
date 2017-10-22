
// JS Objects notations !!!
let bubbels = [];
let dots = [];

function preload(){
  // Load media img sound big data
  for (let i = 0; i < 3; i++) {
  dots[i] = loadImage('images/dot' + i + '.png');
  }
}

function setup() {
  // Once
  createCanvas(600,400);

}

function draw() {
  // Loop
  background(0);

  for (let i = bubbels.length - 1; i >= 0; i--){
    bubbels[i].update();
    bubbels[i].display();
  }
}

function mousePressed() {
  // Even
  let r = floor(random(0, dots.length));
  let b = new Bubble(mouseX,mouseY, dots[r]);
  bubbels.push(b);
}

function mouseDragged() {
  // Event
}


function Bubble(x,y,img) {
  this.x = x;
  this.y = y;
  this.r = 7;
  this.col = color(255,0,220);
  this.img = img;

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
  //  stroke(255);
  //  fill(this.col);
    imageMode(CENTER);
    image(this.img,this.x,this.y,height/4,width/4);
    //ellipse(this.x,this.y,this.r *2);
  }

  this.update = function() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
}
