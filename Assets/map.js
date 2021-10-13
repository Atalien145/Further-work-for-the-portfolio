let map;
function initMap() {
  //const atlanta = { lat: 33.7490, lng: -84.3880 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.7490, lng: -84.3880 },
    zoom: 12,
  });
  function addMarker(location) {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  addMarker({ lat: 33.7490, lng: -84.3880 });
  addMarker({ lat: 33.8373, lng: -84.4068 });
  addMarker({ lat: 33.7833, lng: -84.3831 });
}

