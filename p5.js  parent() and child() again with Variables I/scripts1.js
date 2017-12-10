let p

function setup() {
  noCanvas();
  p = createP('this is a link: ');
  p.style('background-color','#CCC');
  p.style('padding','24px');

  let a = createA('#','apples');
  a.mousePressed(addPhoto);

  a.parent(p);
}

function addPhoto() {
  let img = createImg('images/apple.png');
  img.size(100,100);

  img.parent(p);
//p.child(img);
}
