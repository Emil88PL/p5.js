
// JS Objects notations !!!

let elementP;  //  1


function setup() {
  createCanvas(100,100);
  background(0);

   elementP = select('#one');
  //  elementP.mouseOver(highlite);s
  //  elementP.mouseOut(uhighlite);

  // elementP = selectAll('.rain');
   elementPs = selectAll('p'); // 2
    for (var i = 0; i < elementPs.length; i++) {
       elementPs[i].mouseOver(highlite);
       elementPs[i].mouseOut(uhighlite);
     }


}

function highlite() { //4
  this.style('padding','15pt')
  this.style('background-color','yellow');
}

function uhighlite() { //4
  this.style('padding','0pt')
  this.style('background-color','white');
}
