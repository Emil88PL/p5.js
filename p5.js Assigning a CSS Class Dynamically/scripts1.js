function setup() {
  for (let i = 0; i < 100; i++) {
    let p = createP('apple');
    let x = floor(random(windowWidth));
    let y = floor(random(windowHeight));
    p.position(x,y);
    p.class('apple');
  }

  for (let i = 0; i < 100; i++) {
    let p = createP('blueberry');
    let x = floor(random(windowWidth));
    let y = floor(random(windowHeight));
    p.position(x,y);
    p.class('blueberry');
  }

  for (let i = 0; i < 100; i++) {
    let p = createA('#','Link');
    let x = floor(random(windowWidth));
    let y = floor(random(windowHeight));
    p.position(x,y);
    p.mousePressed(changeClass);
  }

  function changeClass() {
  //  this.removeClass('blueberry');
    this.class('apple');
  }




}
