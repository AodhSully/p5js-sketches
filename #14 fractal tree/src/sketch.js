var angle = 0;
var slider;
//p5.disableFriendlyErrors = true;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}


function draw() {
  background(50);
  angle = slider.value();
  stroke(255);
  translate(200, height);
  branch(100);
}

function branch(len) {
  // var len = 200;
  line(0,0,0, - len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    //line(0, 0, 0, - len * 0.67);
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }

}
