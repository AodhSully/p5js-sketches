let angle = 0;
let w = 30;
let ma;
let maxD;
let slider;

function setup() {
  createCanvas(500, 500, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 150, 150);

  waveSize = createSlider(0.6, 2, 1, 0.1);
  waveSize.style('width', '100px');
  waveSize.position(10, height-50);

  zoom = createSlider(100, 1000, 500, 50);
  zoom.style('width', '100px');
  zoom.position(10, height-25);

  rotateZaxis = createSlider(0, 9.4, 0, 0.1);
  rotateZaxis.style('width', '100px');
  rotateZaxis.position(10, height-75);

  cubeWidth = createSlider (0, 20, 2, 1);
  cubeWidth.style('width', '100px');
  cubeWidth.position(10, height-100);

}

function draw() {
  let offset = 0;
  let cubeWidthV = cubeWidth.value();
  let waveSizeV = waveSize.value();
  let zoomV = zoom.value();
  let rotateZaxisV = rotateZaxis.value();

  background(255);
  ortho(-zoomV, zoomV, zoomV, -zoomV, 0, 2000);

  rotateX(PI / 4);
  rotateY(ma);
  rotateZ(rotateZaxisV);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x,z,width/2,height/2);
      let offset = map(d, 0, maxD, -2, 2);
      let a = angle + offset;
      let h = map(sin(a), -waveSizeV, waveSizeV, 50, 400);
      translate(x - width /2, 0, z - height / 2);
      normalMaterial();
      box(w - cubeWidthV, h, w - cubeWidthV);
      pop();
    }
  }
  angle -= 0.1;
}
