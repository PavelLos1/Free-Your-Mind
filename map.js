(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoicGF2ZWxsb3MiLCJhIjoiY2txdDU5MHlhMWc1dTMybmJod3ZmcTNveiJ9.B5vpvsLaptUpig3I5JlKhw';


    let map = new mapboxgl.Map ({
        container: 'map',
        center: [5.89521874121986, 51.99843896437558],
        zoom: 12.5,
        style: 'mapbox://styles/mapbox/dark-v10'
    });

    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());


    //create html marker
    let marker = document.createElement('div');
    marker.id = 'marker';
    marker.innerHTML = '<img src="media/3440906_map_marker_navigation_pin_icon.png">';

    //create map market
    let mapMarker = new mapboxgl.Marker(marker);
    // position of the marker
    mapMarker.setLngLat([5.89521874121986, 51.99843896437558]);

    //adding marker to the map
    mapMarker.addTo(map);

})();