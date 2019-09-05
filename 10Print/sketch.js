let x = 0;
let y = 0;
let slider, spacing, chance;


function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvas");
  resetSketch();
  slider = createSlider(1, 50, 20);
  slider.position(200, 450);
  slider.mouseClicked(resetSketch);

  chance = createSlider(0.1, 0.9, 0.5, 0.1);
  chance.position( 10, 450);
  chance.mouseClicked(resetSketch);
  console.log(chance.value());
}

function resetSketch() {
  background(0);
  y = 0;
  x = 0;
}

function draw() {
  spacing = slider.value();
  stroke(0, 255, 0);

  if (random(1) < chance.value()) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }

  x = x + spacing;

  if (x > width) {
    x = 0;
    y = y + spacing;
  }

  if (y > height) {
    y = 0;
    resetSketch();
  }
}
