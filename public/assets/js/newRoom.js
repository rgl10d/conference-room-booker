// put event listener on the create room button
//Create an object that sends the form info into the req.body
// Use post request to take in the data from the new-room form
$( document ).ready(function() {
    console.log( "I am still working.");

    $("#new-room-form").on("submit", function(event){
        event.preventDefault();
        const roomNameInput = $("#new-room-name").val();
        console.log(roomNameInput);
    });





});