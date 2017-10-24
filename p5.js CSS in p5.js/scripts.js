
// JS Objects notations !!!

let bgcolor;
let button;
let txt;

function setup() {
  createCanvas(200,200);
  bgcolor = color(52);
  txt = createP('new text');

  txt.mouseOver(changeStyle);
  txt.mouseOut(reverseStyle);

  button = createButton('new');
//  button.mousePressed(changeStyle);
}

function changeStyle() {
  txt.style("background-color","grey");
  txt.style('padding','24px');
}

function reverseStyle() {
  txt.style("background-color","green");
  txt.style('padding','12px');
}


function draw() {
  background(bgcolor);
  fill(255,0,175);
  ellipse(100,100,50);
}
