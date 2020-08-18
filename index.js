$(document).ready(function() {
    // alert("webpage is ready!");
    $("#email-foot").click(function() {
        event.preventDefault();
        window.open("mailto:c.sjackson726@gmail.com");
    })
    $("#github-foot").click(function() {
        event.preventDefault();
        window.open("https://github.com/Chelsea-exe", "_blank");
    })
    $("#port-foot").click(function() {
        event.preventDefault();
        window.open("http://chelsea-exe.github.io/", "_blank");
    })
})