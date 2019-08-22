var song;
var amp;
var button;

var graphHistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('14 Towanda Barnes - If Im Guilty.mp3');
}

function setup() {
  createCanvas(windowWidth, 300);
  button = createButton('Play/ Pause');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}

function windowResized() {
  resizeCanvas(windowWidth, 300)
}

function draw() {
  background(0);
  var vol = amp.getLevel();
  graphHistory.push(vol);
  stroke(0, 255, 0);
  strokeWeight(2)
  noFill();
  push();
  beginShape();

  for (var i = 0; i < graphHistory.length; i++) {
    var y = map(graphHistory[i], 0, 1, height - 50, 0);
    vertex(i, y);
  }
  endShape();
  pop();

  if (graphHistory.length > width) {
    graphHistory.splice(0, 1);
  }
}
