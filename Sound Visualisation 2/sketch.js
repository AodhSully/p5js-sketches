let song;
let amp;
let button;
let graphHistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('q lazzarus - goodbye horses.mp3');
}

function setup() {
  createCanvas(600, 300).parent('canvas');
  angleMode(DEGREES);

  let button = select('#play');
  button.mousePressed(toggleSong);

  song.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  graphHistory.push(vol);
  stroke(0, 255, 0);
  strokeWeight(2)
  noFill();

  translate(width/2, height/2);
  beginShape();
  for (let i = 0; i < 360; i++) {
    let r = map(graphHistory[i], 0, 1, 10, 200);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (graphHistory.length > 360) {
    graphHistory.splice(0, 1);
  }
}
