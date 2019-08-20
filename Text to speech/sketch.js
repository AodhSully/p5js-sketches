let speech;
let voice

function setup() {
  createCanvas(400, 100);
  background(0);
  speech = new p5.Speech(voiceReady);

  speech.started(startSpeaking);
  speech.ended(endSpeaking);

  function startSpeaking() {
    background(255, 0, 0)
  }

  function endSpeaking() {
    background(0,0,255);
  }

  function voiceReady() {
  }
}

function mouseClicked() {
  let voices = speech.voices;
  let voice = random(voices);
  console.log(voice.name)
  speech.setVoice(voice.name);
  speech.speak('fluffy bunnies'); //say stuff
}
