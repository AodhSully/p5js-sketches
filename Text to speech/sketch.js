function setup() {
  createCanvas(400, 100).parent('canvas');
  background(100);
  let dropDown;

  //load p5.speech
  let voice = new p5.Speech();
  voice.onLoad = voiceReady;

  // list voices in dropdown
  function voiceReady() {
    dropDown = createSelect();
    dropDown.parent('voices');
    let voices = voice.voices;
    for (let i = 0; i < voices.length; i++) {
      dropDown.option(voices[i].name);
    }
    // console.log(dropDown);
    dropDown.value(sayIt);
    // console.log(sayIt);
  }

  let textBox = select('#say');
  let volSlider = select('#volume');
  let rateSlider = select('#rate');
  let pitchSlider = select('#pitch');

  // Say default text
  say = textBox.value();
  voice.speak(say);

  let button = select('#speak');
  button.mousePressed(sayIt);

  // change box color when talking
  voice.started(startSpeaking);
  function startSpeaking() {
    background(255, 0, 0);
  }

  voice.ended(endSpeaking);
  function endSpeaking() {
    background(0);
  }

  //Speak
  function sayIt() {

    let say = textBox.value();
    // Selected voice
    let name = dropDown.value();

    // Pitch/Rate/Volume
    voice.setPitch(pitchSlider.value());
    voice.setRate(rateSlider.value());
    voice.setVolume(volSlider.value());

    voice.setVoice(name);
    voice.speak(say);
  }
}
