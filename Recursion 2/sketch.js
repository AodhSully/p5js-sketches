//make dynamic
function setup() {
  createCanvas(1000,360);
  var red = random(255);
  var green = random(255);
  var blue = random(255);
}

function draw() {
  background(51);
  drawCircle(width/2,height/2,500);
  noLoop();
}

function drawCircle(x,y,r) {
  stroke(red, green, blue);
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
    }
  }
}

function mousePressed() {
    console.log("mouse click")
    red = random(255);
    green = random(255);
    blue = random(255);
}
