
// JS Objects notations !!!

let pos = {
  x:300,
  y:200
};

function setup() {
  // Once
  createCanvas(600,400);

  }

function draw(){
  // Loop
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();

  // Of only one is true other doesn't
  // maatter !!!

  if (mouseX > 250) {
    ellipse(pos.x,pos.y,50,50);
  } else if (mouseX > 150) {
    rect(pos.x,pos.y,100,100);
  } else if (mouseX > 50) {
    line(0,0,width,height);
  } else {
    point(300,200);
  }

 // && AND
 // || OR




}

function mousePressed(){
  // Event

}
