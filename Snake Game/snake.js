class Snake {
  constructor() {
    this.length = 1;
    this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xDirection = 0;
    this.yDirection = 0;
  }

  setDirection(x,y) {
    this.xDirection = x;
    this.yDirection = y;
  }

  update(){
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xDirection;
    head.y += this.yDirection;
    this.body.push(head);

    // this.body[0].x += this.xDirection;
    // this.body[0].y += this.yDirection;
  }

  grow() {
    let head = this.body[this.body.length-1].copy();
    this.length++;
    this.body.push(head);
  }

  endGame() {
    
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if (x > w-1 || x < 0 || y > h-1 || y < 0) {
      return true;
    }
    for (var i = 0; i < this.body.length-1; i++) {
      let part = this.body[i];
      if (part.x == x && part.y == y) {
        return true;
      }
    }
    return false;
  }

  eat(pos) {
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if (x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }

  show() {
    for (var i = 0; i < this.body.length; i++) {
      fill(255);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}
