let bg;

let issData = 'http://api.open-notify.org/iss-now.json'
let issPeep = 'http://api.open-notify.org/astros.json'

let cLat = 0;
let cLong = 0;
let lat = 0;
let long = 0;
let zoom = 1;
let x = 0;
let grow = 3;

let issX = 0;
let issY = 0;

let name;
let names;
let craft;
let crafts;

//translated coordinates
function mercX(long) {
  long = radians(long);
  let a = (256 / PI) * pow(2, zoom);
  let b = long + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  let a = (256 / PI) * pow(2, zoom);
  let b = tan(PI / 4 + lat / 2);
  let c = PI - log(b)
  return a * c;
}

function getData(data) {
  let lat = data.iss_position.latitude;
  let long = data.iss_position.longitude;
  issX = (width / 360) * (180 + parseFloat(long));
  issY = (height / 180) * (90 - lat);
}

function askIss() {
  loadJSON(issData, getData);
}

function askIssPeep() {
  loadJSON(issPeep, getPeepNumber);
  // loadJSON(issPeep, getNames);
}

function getPeepNumber(data) {
  let numPeeps = data.number;
  document.getElementById("people").innerHTML = numPeeps;
}

function getAltitude(data) {
  console.log(data.altitude);
  let height = data.altitude;
  document.getElementById("altitude").innerHTML = height;
}

function latLong() {
  line(0, height / 2, window.width, height / 2);
  line(width / 2, 0, width / 2, window.height);
  stroke(51);
}

function bgrnd() {
  background(bg);
  image(bg, 0, 0);
}

function preload() {
  // getPeepNumber(data);
}

function setup() {
  let canvas = createCanvas(1024, 512);
  canvas.parent('sketch-holder');
  bg = loadImage("images/map2.png");
  let cx = mercX(cLong);
  let cy = mercY(cLat);
  setInterval(askIss, 1000);
  setInterval(askIssPeep, 2000);
  // ellipse(issX, issY, x / 2, x / 2);
  // stroke(255)
}

function draw() {
  bgrnd();
  fill(255, 255, 0, x * 2);
  stroke(255);
  ellipse(issX, issY, x / 2, x / 2);
  if (x > 50) {
    grow = -3;
  } else if (x < 3) {
    grow = 3;
  }
  x = x + grow;
}
