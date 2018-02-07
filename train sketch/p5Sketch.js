PVector location;
PVector velocity;
PVector gravity;


function setup() {
  createCanvas(600, 600);
  location = new PVector(100, 100);
  velocity = new PVector(1.5, 2.1);
  gravity = new PVector(0, 0.2);

}

function draw() {
  background(56);
  location.add(velocity);
  velocity.add(gravity);

  //bounce
  if((location.x > width) || (location.x < 0)) {
    velocity.x = velocity.x * -1;
  }

}
