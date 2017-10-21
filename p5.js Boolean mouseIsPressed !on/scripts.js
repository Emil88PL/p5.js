
// JS Objects notations !!!

let pos = {
  x:300,
  y:200
};

let on = false;

function setup() {
  // Once
  createCanvas(600,400);

  }

function draw() {
  // Loop
  if (on) {
   background(0,255,0);
  } else {
    background(0);
  }

  stroke(255);
  strokeWeight(4);
  noFill();

  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250 ){
    fill(255,0,100,100);
  }

  rectMode(CENTER);
  rect(300,200,100,100);

/*
if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250 ){
  if (mouseIsPressed){
    background(0,255,200);
  }
  fill(255,0,200);
}
*/
}

function mousePressed(){
  // Event
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250 ){

    /*
   if (on) {
      on = false;
    } else {
      on = true;
    }*/
  // AND a lot better way to write this
 on = !on;
  }
}
