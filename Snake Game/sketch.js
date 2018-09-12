let snake;
let resolution = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / resolution);
  h = floor(height / resolution);
  frameRate(15);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW ) {
    snake.setDirection(-1, 0);
  } else if (keyCode === RIGHT_ARROW ) {
    snake.setDirection(1, 0);
  } else if (keyCode === UP_ARROW ) {
    snake.setDirection(0, -1);
  } else if (keyCode === DOWN_ARROW ) {
    snake.setDirection(0, 1);
  }
}

function draw() {
  scale(resolution);
  background(51);
  if (snake.eat(food)){
    foodLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    // let message = "Game Over";
    background(255, 0, 0);
    // fill(0);
    // text(message, 50, 50);
  }
  noStroke();
  fill(0, 255, 0);
  rect(food.x, food.y, 1, 1);
}
