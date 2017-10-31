 function setup() {
    let canvas = createCanvas(400,400);
    canvas.parent('canvasp'); // #assumed
 }

function draw() {
  background(0);
  ellipse(200,200,random(100),random(100));
}
