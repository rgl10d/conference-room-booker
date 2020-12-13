// put event listener on the create room button
//Create an object that sends the form info into the req.body
// Use post request to take in the data from the new-room form
$( document ).ready(function() {
    console.log( "I am still working.");

    $("submit-new-room").on("click", function(event){
        event.preventDefault();
       IamOn();
    });

    function IamOn(){
        console.log("I was clicked.");
    };
});