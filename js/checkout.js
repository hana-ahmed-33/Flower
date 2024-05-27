// Map instance
var map;

// Markers array so map can show both markers with best view.
var marker="";

// Init map
var initMap = function () {
  var chestersLoc = {
    lat: 52.19147365,
    lng: -2.21880075
  };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: chestersLoc
  });
}

// Show the users position
var showPosition = function (position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var new_marker = new google.maps.Marker({
    position: userLatLng,
    title: 'Your Location',
    draggable: true,
    map: map
  });

  //  marker's user
  marker= new_marker;

  // Create bounds object, set best map view.
  var bounds = new google.maps.LatLngBounds();
  bounds.extend(marker.getPosition());

  // Set best map view for markers.
  map.fitBounds(bounds);
}

function errorHandler(error) {
  console.log('Geolocation error : code ' + error.code + ' - ' + error.message);
}

initMap();

navigator.geolocation.getCurrentPosition(showPosition, errorHandler, { //get user location
  enableHighAccuracy: false,
  maximumAge: 60000,
  timeout: 27000
});

google.maps.event.addListener(map, 'click', function (event) {
  marker.setMap(null); //remove old marker
  alert("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());
//new marker with  new lat,long
  var myLatlng = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()); //marker after alert
  var new_marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Hello World!'
  });
  marker = new_marker;
});