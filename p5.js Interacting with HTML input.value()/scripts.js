
// JS Objects notations !!!
let title;
let x = 10;
let y = 300;
let textx = 100;
let texty = 100;
let bgcolor;

let btn;
let sli;
let input;


function setup() {
 // Once
 canvas = createCanvas(300,200);
 canvas.position(x,y);
 title = createElement('h1', 'Emil');
 bgcolor = color(200);
btn = createButton("lol daaam");
createP('Your name');
btn.mousePressed(changeColor); //

  sli = createSlider(10,100,7,);
  input = createInput('Type your name:');


 }


function changeColor() {
 bgcolor = color(random(255));
}
/*
function mousePressed() {
 btn.mousePressed(changeColor); //

}
*/
function draw() {
 // Loop
 background(bgcolor);
 title.position(textx,texty);
 ellipse(150,100,sli.value());
 title.html(input.value());
 text(input.value(),10,20);
 textx = textx + random(-3,3);

}
