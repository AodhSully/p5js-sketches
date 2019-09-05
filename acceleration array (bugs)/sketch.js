let movers = [];
let bulb;

function preload() {
  bulb = loadImage("bulb.png")
}

function setup() {
  createCanvas(640,360);
  for (var i = 0; i < 20; i++) {
     movers[i] = new Mover();
  }
}

function draw() {
  background(51);
  image(bulb, mouseX - 60, mouseY - 60, 120, 120)
  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }

}
