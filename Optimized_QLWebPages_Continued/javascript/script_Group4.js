
// getting the object from json file usind JQuery
var objs;
$.getJSON('./offline_data/data.json', function(data){
  objs = data;
}); 
alert(objs[0]);

// Student defined
var lat ;//=  42.920250;
var lng ;//= -73.239190;
var title; // = "Ursula's Office";
var contentBlub; //"Oliver can be found here";
var essayLink;
var essayTitle;
var goElseWhereLink;
var goElseWhereTitle;
// Map necessary (only in intiMap?)
var map;
//  var marker;
var place;
function initMap() {
  // setMapPosition(objs[0]);
  makeMap();
  // markerAndWindow();
  for(i in objs) {
    setMapPosition(objs[i]);
    markerAndWindow();
  }
}
function makeMap() {
  place = {lat: 0,  lng: 0};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: place
  });
}
function markerAndWindow() {
  place = new google.maps.LatLng(lat, lng); // {lat: lat,  lng: lng};
  var marker = new google.maps.Marker({
    position: place,
    map: map,
    title: title
  });
  var contentString =  BuildInfoContent(contentBlurb,essayLink,essayTitle,goElseWhereLink,goElseWhereTitle);
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);});
}
function setMapPosition(obj) {
    lat = parseInt(obj.Lattitude); // Number(document.getElementById("lat").value);
    lng = parseInt(obj.Longitude); // Number(document.getElementById("lng").value);
    title = obj.Marker; // document.getElementById("title").value;
    contentBlurb = obj.InfoWindow; //document.getElementById('contentBlurb').value;
    essayLink = obj.EssayLink; //document.getElementById('essay').value;
    essayTitle = obj.EssayTitle; //document.getElementById('essayTitle').value;
    goElseWhereLink = obj.OtherLink; //document.getElementById('goElseWhereLink').value;
    goElseWhereTitle = obj.NextTitle; //document.getElementById('goElseWhereTitle').value;
}
function BuildInfoContent(blurb, url,urlText,aurl,aurlText) {
  var heading = document.createElement("h3");
  heading.appendChild(document.createTextNode(blurb));
// First link
  var txt = document.createTextNode('More information: ');
  var anchor = document.createElement("A");
  anchor.href = url;
  var node = document.createTextNode(urlText);
  anchor.appendChild(node);
// Second link:
  var txt2 = document.createTextNode('Next stop on our travels: ');
  var anchor2 = document.createElement("A");
  anchor2.href = aurl;
  var node2 = document.createTextNode(aurlText);
  anchor2.appendChild(node2);
  var element = document.createElement("div");
  element.appendChild(heading);
  element.appendChild(txt);
  element.appendChild(anchor);
  element.appendChild(document.createElement("p"));
  element.appendChild(txt2);
  element.appendChild(anchor2);
  return element;
}
function processInfo() {
  lat = Number(document.getElementById("lat").value);
  lng = Number(document.getElementById("lng").value);
  initMap();   
} 
  
// this is for the search bar that I though would be cool to work with while using Google Maps
// Why important, this feature has been used by great apps like Uber, Lyft and indeed they are multi-million companies now!!!
function search_user_defined_input() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap',
    gestureHandling: 'greedy' 
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('search_box-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Zooming Feature.
  // That is centering the map according to user defined areas
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // This one is great: since it provides recommendation for places 
  // which is kind of Google built in thing but I think really useful
  // specially when you want to narrow down the searches 
  // again: Uber, Lyft are extremely using this feature in their app

  // that is: it listens for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // We should clear the old markers because we need the new one by zooming it to
    // user defined specific place.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        // error message showing
        console.log("Sorry, Could not return the place!");
        // that is this is just for printing
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

// Note: since I am using Google Maps API so I had to as well as deinately taking some refernces from it
//       from accessing api key to using specific methods name else it won't work and its there company's policy       