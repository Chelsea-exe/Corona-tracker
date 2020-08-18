// var lat = position.coords.latitude;
// var lng = position.coords.latitude;

// let btn = document.getElementById("gps-btn");
// btn.addEventListener("bounds_changed",()=>{
//   console.log("button was pressed");
//   createMap ()
//   }
// });
var map;

function createMap () {
  //the webpage is going to locate user's location using the geolocation method.
  if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        //using google maps api
        var options = {
          center: { lat: position.coords.latitude , lng: position.coords.longitude },
          zoom: 12
        };
      
        map = new google.maps.Map(document.getElementById('map'), options);
      
        var input = document.getElementById('search');
        var searchBox = new google.maps.places.SearchBox(input);
      
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });
      
        var markers = [];
        
        searchBox.addListener('places_changed', function () {
          var places = searchBox.getPlaces();
      
          if (places.length == 0)
            return;
      
          markers.forEach(function (m) { m.setMap(null); });
          markers = [];
      
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(p) {
            if (!p.geometry)
              return;
      
            markers.push(new google.maps.Marker({
              map: map,
              title: p.name,
              position: p.geometry.location
            }));
      
            if (p.geometry.viewport)
              bounds.union(p.geometry.viewport);
            else
              bounds.extend(p.geometry.location);
          });
          
          map.fitBounds(bounds);
        });
    })
  }
  else {
    alert("This webpage won't be able to locate your location");
  }
    // var lat = position.coords.latitude;
    // var lng = position.coords.latitude;
} 