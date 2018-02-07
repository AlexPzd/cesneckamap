function initMap() {
  //Map options
       var options = {
         zoom: 11,
         center: {lat:50.0755, lng:14.4378}
}
//New map
 var map = new google.maps.Map(document.getElementById('map'),options);
/*
var marker = new google.maps.Marker({
position: {lat: 50.107505, lng: 14.544582},
map: map
});
*/


let markerArray  = [
  { coords : {lat: 50.107505, lng: 14.544582},
    caption: '<h3>"U Mateje" Dobra česnečka za 40 kc</h3>'
},
{ coords : {lat: 50.087728, lng: 14.452802},
  caption: '<h3>"Planeta Zizkov" Dobra česnečka za 35 kc</h3>'
},
]

//Add marker function
function addMarker (coords, caption) {
  var marker = new google.maps.Marker({
    position: coords,
    map: map
  });
if (caption) {
    var infoWindow = new google.maps.InfoWindow({
      content: caption
    });
       marker.addListener ('click', function(){
         infoWindow.open (map,marker);
       });

  };
}

for (let i=0; i<markerArray.length;i++){
addMarker(markerArray[i].coords, markerArray[i].caption);
}
}
