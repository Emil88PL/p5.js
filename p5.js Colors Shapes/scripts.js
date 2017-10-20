
function setup() {
  createCanvas(640,360);
  }

function draw(){
  background(230);
  ellipseMode(CENTER);
  rectMode(CENTER);
  // order is important
  // Body
  fill(255,0,0)
  rect(240,145,20,100);

  // Head
  fill(0,0,255,100)
  ellipse(240,115,60,60);

  // Eyes
  fill(0,255,0)
  ellipse(221,115,16,32);
  ellipse(259,115,16,32);

  // Legs
  line(230,195,220,205);
  line(250,195,260,205);

  // Arms
  line(230,150,220,145);
  line(250,150,260,145);
}
