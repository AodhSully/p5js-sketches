var mapImage;
var earthquakes;

var cLat = 0;
var cLong = 0;
var lat = 0;
var long = 0;
var zoom = 1;

function preload() {
  mapImage = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,0/1024x512?access_token=pk.eyJ1IjoiYW9kaCIsImEiOiJjam0wd2c3MGMwNHUyM2tsam15eW1nMmYzIn0.KldvlwYNGivL9pct93Z1xA');
  earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv')
}

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
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapImage, 0, 0);

  var cx = mercX(cLong);
  var cy = mercY(cLat);

  for (var i = 0; i < earthquakes.length; i++) {
    (function(i) {
      setTimeout(function() {

        var data = earthquakes[i].split(/,/);
        //console.log(data);
        var lat = data[1];
        var long = data[2];
        var mag = data[4];
        var depth = data[3];
        var type = data[15];

        var x = mercX(long) - cx;
        var y = mercY(lat) - cy;

        mag = pow(10, mag);
        mag = sqrt(mag);

        var magMax = sqrt(pow(10, 10));
        var d = map(mag, 0, magMax, 2, 500);
        // console.log(type);
        if (type === "explosion" || type === "quarry blast"
          || type === "chemical" || type === "other event") {
          fill(255, 255, 255); //white
        } else if (type === "ice quake") {
          fill(0, 0, 255); //blue
        }
        else {
          if (depth <= 7) {
            // } else if (depth > 4 && depth < 7) {
            fill(0, 255, 0, 50); //green
          } else if (depth > 7 && depth < 15) {
            fill(255, 255, 0, 50);
          } else {
            fill(255, 0, 0, 100); //red
          }
        }
        noStroke();
        ellipse(x, y, d, d)
        document.getElementById("current").innerHTML = i + 1;
      },
       1000);
      // slider.value * i);
    })(i);
    // console.log(slider.value)
  }

  document.getElementById("total").innerHTML = earthquakes.length;

}
