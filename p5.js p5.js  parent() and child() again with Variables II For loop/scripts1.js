let images = [];

function setup() {
  noCanvas();
  for (let i = 0; i < 12; i++){
    let p = createP('this is a link: ');
    p.style('background-color','#CCC');
    p.style('padding','24px');

    let a = createA('#','apples');
    a.mousePressed(addPhoto);
    a.parent(p);
  }


  let button = select('#clear');
  button.mousePressed(clearStuff);
}

function clearStuff() {
  for (let i = 0; i < images.length; i++) {
    images[i].remove();
  }
  images = [];
}


function addPhoto() {
 let img = createImg('images/apple.png');
 images.push(img);
 img.size(100,100);
 img.parent(this);


// let paragraph = this.parent();
// img.parent(this);
//p.child(img);
}
