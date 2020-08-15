$(document).ready(function() {
    // alert($);
    $('#find-btn').click(function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position);
                $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
                    console.log(data);
                })
            })
        }
    })
        // if('geolocation' in navigator) {
        //     console.log('geolocation available');
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //         console.log(position.coords);
        //     });   
        // }
        // else {
        //     console.log('geoloation is not available');
        //     alert("geolocation is not available, use the search bar to locate covid-19 testing centers.")
        // }
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         console.log(position);
    //         console.log("location is located");
    //         $.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.longitude + "&sensor=false", function(data) {
    //             console.log(data);
    //             console.log("here is your location!");
    //         })
    //     })
    // } 
});
/* https://www.googleapis.com/geolocation/v1/geolocate?key= */