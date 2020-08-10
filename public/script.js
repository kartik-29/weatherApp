const searchElement = document.querySelector('[data-city-search]');
const searchBox = new google.maps.places.SearchBox(searchElement);
searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0];
    if (place == null)
        return
    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();
    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'appplication/json'
        },
        body: JSON.stringify({
            lat: latitude,
            lng: longitude
        })
    })
    .then(data => {
        console.log(data);
        // setWeatherData(data, place.formatted_address)
    })
    .catch(err => console.log(err));
});