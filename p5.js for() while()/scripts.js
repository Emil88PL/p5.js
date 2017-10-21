
// JS Objects notations !!!

let offset = 0;

function setup() {
  // Once
  createCanvas(600,400);

  }

function draw() {
  // Loop
  background(0);
  stroke(255);
  strokeWeight(4);

for (var x = 0; x <= width; x+=50){
  fill(random(255),0,random(255));
   ellipse(x + offset,200,25,25);
}

offset += 1;

for (var x = 0; x <= width; x+=50){
  fill(255,0,200);
   ellipse(x,100,25,25);
}


  var x = 0;
  while (x <= width) {
    fill(0,255,100);
    ellipse(x,300,25,25);
    x += 50;
  }



}

function mousePressed(){
  // Event

}
