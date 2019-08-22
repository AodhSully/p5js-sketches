let song;
let fft;
let button;
let graphHistory = [];
let bands = 512;
let w;
let slider;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('Rodney P -The Nice Up.mp3');
}

function setup() {
  createCanvas(600, 300).parent('canvas');
  let button = select('#play');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, bands);
  w = width / bands;
}

function draw() {
  background(0);
  let red;
  let green;
  let blue;
  let spectrum = fft.analyze();

  for (var i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let y = map(amp, 0, bands, height, 0);
    red = fft.getEnergy("bass");
    green = fft.getEnergy("mid");
    blue = fft.getEnergy("treble");
    console.log(red, green, blue);
    line(i * w, height, i * w, y);
  }

  stroke(red, green, blue/4, red);
  strokeWeight(2)
  // noFill();
}
