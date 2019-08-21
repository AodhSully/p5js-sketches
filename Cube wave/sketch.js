let angle = 0;
let w = 30;
let ma;
let maxD;

function setup() {
  createCanvas(500, 500, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 150, 150);
}

function draw() {
  background(100);
  ortho(-500, 500, 500, -500, 0, 2000); //viewing angle

  rotateX(QUARTER_PI);
  rotateY(ma);
  // translate(0, 0, -500);
  // directionalLight(255, 255, 255, 0, -1, 0);
  // translate(width /2, height /2);
  // rectMode(CENTER);
  // rotateX (angle * 0.3)

  let offset = 0;
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x,z,width/2,height/2);
      let offset = map(d, 0, maxD, -2, 2);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 50, 400);
      translate(x - width /2, 0, z - height / 2);
      normalMaterial();
      box(w-2, h, w - 2);
      pop();
      // fill(255);
      // ambientMaterial(255);
      // rect(x - width /2 + w / 2, 0, w -2, h);
    }
    // offset += 0.1;
  }
  angle -= 0.1;
}
