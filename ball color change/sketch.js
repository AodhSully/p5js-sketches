var circle = {
  x: 0,
  y: 200,
  r: 50
};

function setup() {
  createCanvas (640, 400);
}

function draw() {
  background(51);
  fill(map(mouseX, 0, 640, 0, 255), map(mouseY, 0, 640, 0, 255), 0);
  noStroke();

  ellipse(circle.x, circle.y, circle.r, circle.r);

  circle.x = circle.x + 10;
  if (circle.x > window.width) {
    circle.x = 0;
  }
}
