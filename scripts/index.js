let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.92731651229432, lng: -1.3312037236649066 },
    zoom: 15,
  });
}