var bg;

var issData = 'http://api.open-notify.org/iss-now.json'
var issPeep = 'http://api.open-notify.org/astros.json'
// var issPeep
var cLat = 0;
var cLong = 0;
var lat = 0;
var long = 0;
var zoom = 1;
var x = 0;
var grow = 3;

var issX = 0;
var issY = 0;
var name;
var names;
var craft;
var crafts;

//translated coordinates
function mercX(long) {
  long = radians(long);
  var a = (256 / PI) * pow(2, zoom);
  var b = long + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b)
  return a * c;
}

function setup() {
  var canvas = createCanvas(1024, 512);
  canvas.parent('sketch-holder');
  bg = loadImage("images/map2.png");
  var cx = mercX(cLong);
  var cy = mercY(cLat);
  setInterval(askIss, 1000);
  setInterval(askIssPeep, 2000);
}

function askIss() {
  loadJSON(issData, getData);
}

function askIssPeep() {
  loadJSON(issPeep, getPeepNumber);
  loadJSON(issPeep, getNames);
}

function getPeepNumber(data) {
  var numPeeps = data.number;
  document.getElementById("people").innerHTML = numPeeps;
}

function getNames(data) {
  for (var i = 0; i < data.people.length; i++) {
    names = data.people[i].name;
    crafts = data.people[i].craft;
    console.log(names);
    document.getElementById("name").innerHTML = names;
    document.getElementById("craft").innerHTML = crafts;
  }
  // do this
  //https://www.w3schools.com/jsref/met_table_insertrow.asp
  // var message = data.message;
  // document.getElementById("table").innerHTML = craft;
}

function getData(data) {
  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;
  // var people = data.number;
  // var peep = people.toString()
  issX = (width / 360) * (180 + parseFloat(long));
  issY = (height / 180) * (90 - lat);
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
