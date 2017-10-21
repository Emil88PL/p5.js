
// JS Objects notations !!!

let pos = {
  x:0,
  y:200
};

let speed = 40;
let speedB = 40;

let speedY = 1;
let speedYY = 2;

function setup() {
  // Once
  createCanvas(600,700);

  }

function draw(){
  // Loop
  background(0);
  stroke(255);
  strokeWeight(8);
  noFill();


  ellipse(pos.x,pos.y,50,50);

/*
  // X
  pos.x += speed;

  if (pos.x > width){
    speed -= speedB;
  }

  if (pos.x <= 0){
    speed += speedB;
  }
  // Y  
  pos.y += speedY;

  if (pos.y > height){
    speedY -= speedYY ;
  }
  if (pos.y < 0){
    speedY += speedYY;
  }
*/
  // AND a proper way to do it !!!!!!!!!!!!!!!!

if (pos.x > width || pos.x < 0){
    speed = speed * -1;
  }

  pos.x += speed;
 




console.log(pos.y);

}

function mousePressed(){
  // Event

}
