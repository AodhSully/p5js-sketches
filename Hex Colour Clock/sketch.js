function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function draw() {
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function getTime() {
    var today = new Date();
    var hs = today.getHours().toString();
    var ms = today.getMinutes().toString();
    var ss = today.getSeconds().toString();
    var h = Math.round(hs);
    var m = Math.round(ms);
    var s = Math.round(ss);
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    var bg = '#' + h + m + s;
    background(bg);
    
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('hexColor').innerHTML = "#" + h + m + s;
    t = setTimeout(function() {
      getTime()
    }, 500);
  }
  getTime();
}
