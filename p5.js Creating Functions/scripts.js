
// JS Objects notations !!!
let ball = {
  x:300,
  y:200,
  xspeed: 4,
  yspeed: -3
};

function setup() {
  // Once
  createCanvas(600,400);

}

function draw() {
  // Loop
  background(0);
  //call functions
  move();
  bounce();
  display();


}
// Defain functions
function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  strokeWeight(4);
  stroke(255);
  fill(random(255),0,255);
  ellipse(ball.x,ball.y,24,24);
}


function mousePressed(){
  // Event

}
