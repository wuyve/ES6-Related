let options = {
    maximumAge: 0,
    timeout: 7000,
    enableHighAccuracy: true
}
function succeed(position) {
    with(position.coords) {
        let message = `current location:\n\tLatitude = ${latitude}\n\tLongitude = ${longitude}\n\tdistance accuracy = ${accuracy}meters.`;
        console.log(message);
    }
}
function fail(error) {
    console.log(`S{error.code}: ${error.message}`);
}
navigator.geolocation.getCurrentPosition(succeed, fail, options);