// ((lat1 long1) - (lat2 long2))/ time

//save lat1 & long1 load points
//get time of load

//update lat2 & long2



function calculateSpeed(t1, lat1, lng1, t2, lat2, lng2) {
  // From Caspar Kleijne's answer starts
  /** Converts numeric degrees to radians */
  if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }
  }
  // From Caspar Kleijne's answer ends
  // From cletus' answer starts
  var R = 6371; // km
  var dLat = (lat2-lat1).toRad();
  var dLon = (lon2-lon1).toRad();
  var lat1 = lat1.toRad();
  var lat2 = lat2.toRad();

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) *    Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var distance = R * c;
  // From cletus' answer ends

  return distance / t2 - t1;
}

function firstGeolocationSuccess(position1) {
  var t1 = Date.now();
  navigator.geolocation.getCurrentPosition(
    function (position2) {
      var speed = calculateSpeed(t1 / 1000, position1.coords.latitude, position1.coords.longitude, Date.now() / 1000, position2.coords.latitude, position2.coords.longitude);
    }
}
navigator.geolocation.getCurrentPosition(firstGeolocationSuccess);
