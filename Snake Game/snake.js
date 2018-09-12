class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(0, 0);
    this.xDirection = 0;
    this.yDirection = 0;
  }

  setDirection(x,y) {
    this.xDirection = x;
    this.yDirection = y;
  }

  update(){
    this.body[0].x += this.xDirection;
    this.body[0].y += this.yDirection;
  }

  eat(pos) {
    let x = this.body[0].x;
    let y = this.body[0].y;
    if (x == pos.x && y == pos.y) {
      return true;
    }
  }

  show() {
    fill(255);
    rect(this.body[0].x, this.body[0].y, 1, 1);
  }
}
