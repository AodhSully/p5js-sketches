var x = 0;
var grow = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(51);
  noStroke();
  fill(x, 255, 0, x * 2);
  ellipse(width / 2, height / 2, x, x);

  if (x > 50) {
    grow = -3;
  } else if (x < 3) {
    grow = 3;
  }
  x = x + grow;
}
