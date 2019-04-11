let bubbles = [];

function setup() {
  createCanvas(500, 1000);
}

function draw() {
  background(51);
  bubbles.push(new Bubble(createVector(width / 2, 50)));

  // Looping through backwards to delete
  for (var i = bubbles.length - 1; i >= 0; i--) {
    var p = bubbles[i];
    p.run();
    if (p.isDead()) {
      //remove bubbles
      bubbles.splice(i, 1);
    }
  }
}
