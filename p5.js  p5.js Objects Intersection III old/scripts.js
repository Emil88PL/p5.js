
// JS Objects notations !!!
let bubbles = [];

function preload(){
  // Load media img sound big data
}
function setup() {
  // Once
  createCanvas(600,400);
  for (let i = 0; i < 10; i++){
    let x = random(width);
    let y = random(height);
  bubbles.push(new Bubble(x,y));
  }
}

function draw() {
  // Loop
  background(0);
  for (let i = 0; i < bubbles.length; i++){
  bubbles[i].display();
  bubbles[i].move();
 }
 if (bubbles.length > 50) {
   bubbles.splice(0,1);
 }

}

function mousePressed() {
  // Even
  for (let i = 0; i < bubbles.length; i++){
  bubbles[i].clicked();
}
}

/*
function mouseDragged() {
  // Event
  bubbles.push(new Bubble(mouseX,mouseY));
}

function keyPressed() {
  //key pressed
  bubbles.splice(0,1);
}
*/
function Bubble(x,y,r) {
  // Constructor

  this.x = x;
  this.y = y;
  this.r = random(22);
  this.col = color(random(255),random(255),100);

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x,this.y,this.r *2);
  }

  this.clicked = function() {
    let d = dist(mouseX,mouseY,this.x,this.y);
      if (d < this.r) {
        this.x = 0;
        this.y = 0;
       this.col = color(random(255),random(255),random(255));
      }

}

  this.move = function() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
}

/*    // Literal Object (Look UP)
{
  x:random(0,width),
  y:random(0,height),
  display: function() {
    stroke(255);
    noFill();
    ellipse(this.x,this.y,24,24);
  },
  move: function() {
  {
    x:random(0,width),
    y:random(0,height),
    display: function() {
      stroke(255);
      noFill();
      ellipse(this.x,this.y,24,24);
    },
    move: function() {
      this.x = this.x + random(-1,1);
      this.y = this.y + random(-1,1);
    }
   }
  }
 }
 */
