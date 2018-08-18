
let angle = 0;
let aVelocity = 0;
//let aAcceleration = 0.0001;
let aAcceleration = 0.002;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);

  translate(width / 2, height / 2);
  rotate(angle);

//line + balls
  stroke(0);
  strokeWeight(2);
  fill(255,255,0);


//object placement
  line(-60, 0, 60, 0);
  ellipse(60, 0, 16, 16);
  ellipse(-60, 0, 16, 16);

  angle += aVelocity;
  aVelocity += aAcceleration;
}
