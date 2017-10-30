
// JS Objects notations !!!

let elementP;  //  1
let btn;

function setup() {
  createCanvas(100,100);
  background(0);



  // elementP = select('#uni');
   elementP = selectAll('.rain');
//  elementP = selectAll('p'); // 2
    for (var i = 0; i < elementP.length; i++) {
      elementP[i].style('font-size','26pt');
    }



  btn = select('#btn');
  btn.mousePressed(btnClick);

}

function btnClick() {
    background(random(255),random(255),random(255));
}

function change() { //4
  elementP.style('background-color','yellow');
}

function draw() {



}
