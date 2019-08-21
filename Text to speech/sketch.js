let speech;

function setup() {
  createCanvas(400, 100);
  background(0);

  speech = new p5.Speech(); // speech synth object
  speech.onLoad = voiceReady;

  speech.started(startSpeaking);
  speech.ended(endSpeaking);

  function startSpeaking() {
    background(0, 255, 0);
  }

  function endSpeaking() {
    background(0);
  }

  function voiceReady() {
    console.log('voice ready');
    //console.log(speech.voices);
  }
}

function mousePressed() {
  let voices = speech.voices;
  let voice = random(voices);
  console.log(voice);

  speech.setVoice(voice.name);
  speech.speak('Calvin and Hobbes'); // say something
  console.log('ckicj');
}
