$.getJSON('http://api.open-notify.org/astros.json?callback=?',
function(data) {
    var number = data['number'];
    $('#spacepeeps').html(number);

    data['people'].forEach(function (d) {
         $('#astroPeeps').append('<li>' + d['name'] + '</li>');
    });
});
