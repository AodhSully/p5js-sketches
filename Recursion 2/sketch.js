
function setup() {
  createCanvas(1000,360);
}

function draw() {
  background(51);
  drawCircle(width/2,height/2,500);
  noLoop();
}

function drawCircle(x,y,r) {
  stroke(0,0,255);
  noFill();
  ellipse(x, y, r, r);
  if(r > 1) {

    //circles left + right
    drawCircle(x + r/2, y, r/2);
    drawCircle(x - r/2, y, r/2);

    //recursive 3d effect
    // if(r > 1) {
    //   r *= 0.75;
    // drawCircle(x, y, r);
    // }
  }
}
