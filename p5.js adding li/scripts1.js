let lol = ['rainbow', 'horse', 'moose', 'deeer', 'lake'];


function setup() {
  noCanvas();

let button = select("#button");
button.mousePressed(addItem);

}


function addItem() {
  let r = floor(random(0,lol.length));
  let li = createElement('li', lol[r]);

  li.parent('listli');

//  createP(lol[r]);
}

function draw() {

}
