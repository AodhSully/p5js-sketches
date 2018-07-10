//Nature of code
let position;
let velocity;

function setup() {
  createCanvas(500, 250);
  background(255);
  position = createVector(100, 100);
  velocity = createVector(5, 5);
}

function draw() {
  //redraw background
  background(0);

  position.add(velocity);

  if ((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  }

  //ball color + size
  stroke(0,  255, 0);
  strokeWeight(5);
  fill(255, 0, 0);
  ellipse(position.x, position.y, 48, 48);
}
