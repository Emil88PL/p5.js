
// JS Objects notations !!!

let circle ={
  x:0,
  y:100,
  diameter:50
};

// JS Object

let circle2 ={
  x:0,
  y:100,
  diameter:50
};

// JS Object

let colors = {
  r:250,
  g:250,
  b:0
};

function setup() {
  // Once
  createCanvas(600,300);

  }

function draw(){
  // Loop
  circle.x += 1;

  colors.r -= 1;
  colors.c -= 1;
  colors.b += 2;

  background(colors.r,colors.g,colors.b)
  fill(250,200,200)
  ellipse(circle.x,circle.y,circle.diameter,circle.diameter);

}

function mousePressed(){
  // Event
 circle.x = 0;

 colors.r = 250;
 colors.c = 250;
 colors.b = 0;
}
