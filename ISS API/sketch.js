var bg;
var issIcon;
var y = 0;

var url = 'http://api.open-notify.org/iss-now.json'

var issX = 0;
var issY = 0;

function setup() {
  createCanvas(1200, 715);
  bg = loadImage("images/map2.jpg");
  // issIcon = loadImage("images/iss2.png");
  issIcon = loadImage("images/iss.svg");
  setInterval(askIss, 1000);
}

function askIss() {
  loadJSON(url, getData);
}

function getData(data) {
  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;
  // issX = map(lat, 90, -90, 0, width);
  // issY = map(long, 180, -180,  0, height);

  issX = (width/360) * (180 + parseFloat(long));
  issY = (height/180) * (90 - lat);

  // console.log(issX, issY);
}

function draw() {
  background(bg);

  function latLong() {
    line(0, height/2, window.width, height/2);
    line(width/2, 0, width/2, window.height);
    stroke(51);
  }

  fill(255);
  ellipse(issX, issY, 25, 25);
  image(issIcon, issX -10, issY -10, 20, 20)

  stroke(226, 204, 0);
  line(0, y, width, y);
  latLong();

  y++;
  if (y > height) {
   y = 0;
  }
}
