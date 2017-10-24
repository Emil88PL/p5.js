
// JS Objects notations !!!
let title;
let x = 20;
let y = 40;
let textx = 300;
let texty = 900;
let bgcolor;

let btn;

function setup() {
 // Once
 canvas = createCanvas(300,200);
 canvas.position(x,y);
 title = createElement('h1', 'Emil');
 bgcolor = color(200);
btn = createButton("lol daaam");
btn.mousePressed(changeColor); //
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

 textx = textx + random(-3,3);

}
