
// JS Objects notations !!!

// let nums = [100,25,46,72];
let num = 23;
let words = ["lol 0", "text 1", "object 2","something 3"];

let index = 0;
function setup() {
  // Once
  createCanvas(600,400);

}

function draw() {
  // Loop
  background(0);

  fill(255);
  textSize(32);
  text(words[index],12,200);


//ellipse(100,100,num,num);

//  ellipse(200,100,nums[2],nums[2]);

}

function mousePressed() {
  // Event
  index += 1;

  if(index == words.length) {
    index = 0;
  }
}
