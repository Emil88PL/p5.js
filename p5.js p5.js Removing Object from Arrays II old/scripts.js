
// JS Objects notations !!!
let bubbles = [];

function preload(){
  // Load media img sound big data
}
function setup() {
  // Once
  createCanvas(600,400);
   
  }


function draw() {
  // Loop
  background(0);  //always arrays delete from back
  for (let i =  bubbles.length -1; i >= 0; i--){
  bubbles[i].display();
  bubbles[i].move();

  if (bubbles[i].isFinished()) {
   bubbles.splice(i,1);
  }
 }
}

function mouseDragged() {
  // Even
  let b = new Bubble(mouseX,mouseY);
  bubbles.push(b);
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
  this.lifespan = 255;
  this.r = random(22);
  this.col = color(random(255),random(255),100);

  this.display = function() {
  //  stroke(255);
    noStroke();
    fill(random(255),random(255),this.lifespan);  // col ??
    ellipse(this.x,this.y,this.r *2);
  }

//  this.clicked = function() {
  //  let d = dist(mouseX,mouseY,this.x,this.y);
    //  if (d < this.r) {
    //   this.col = color(random(255),random(255),random(255));
    //  }

//}
  this.isFinished = function() {
    if (this.lifespan < 0){
      return this;
    }
  }

  this.move = function() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
    this.lifespan--;
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
