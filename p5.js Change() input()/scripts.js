
// JS Objects notations !!!

let textbox;
let slider;
let paragraph;

function setup() {
  noCanvas();

  textbox = createInput('enter text');
  slider = createSlider(10,64,16);
  paragraph = createP('starting text');


///  textbox.changed(doSomething); //Working with TAB && Enter
textbox.input(upDateText);
slider.input(updateSize);

}

function updateSize() {
  paragraph.style("font-size",slider.value() + "pt");
}

function upDateText() {
  paragraph.html(textbox.value());
}


function draw() {

}
