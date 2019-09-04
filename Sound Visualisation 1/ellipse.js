//line that moves to music

let song;
let button
let amp;


function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
    } else {
        song.play();
    }
}

function preload() {
  song = loadSound('14 Towanda Barnes - If Im Guilty.mp3')
}

function setup() {
  createCanvas(300, 300);
  song.play();
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  ellipse(150, 150, 200, vol * 200);
}
