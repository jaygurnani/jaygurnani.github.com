function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var myLatLong = new google.maps.LatLng(25.065503, 121.525857);
  var mapOptions = {
    center: myLatLong,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
  var marker = new google.maps.Marker({
    position: myLatLong,
    map: map,
    title: 'RayChin International Co. Ltd'
  });

}


$(document).ready(function() {

  $("#owl-demo").owlCarousel({
    items : 6,
    lazyLoad : true,
    navigation : true,
    autoPlay : 3500,
    stopOnHover : true,
  });

google.maps.event.addDomListener(window, 'load', initialize);

});
