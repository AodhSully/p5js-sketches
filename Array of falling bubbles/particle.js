class Bubble {

  constructor(position) {
    this.acceleration = createVector(0, 0.09);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 200;
  }

  run() {
    this.update();
    this.display();
  }

  //update pos
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1.5;
  }

  //bubble
  display() {
    stroke(0, 0, 100, this.lifespan);
    strokeWeight(2);
    fill(0, 0, 255, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  //burst bubble
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
