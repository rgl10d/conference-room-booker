// put event listener on the create room button
//Create an object that sends the form info into the req.body
// Use post request to take in the data from the new-room form
$(document).ready(function () {
    console.log("I am still working.");

    $("#new-room-form").on("submit", function (event) {
        event.preventDefault();
        const name = $("#new-room-name").val();
        console.log(name);

        $.ajax({
            method: "POST",
            url: "/api/rooms",
            data: {
                name
            },
        }).then((response) => {
            window.location.replace("/rooms");
        });
    });
    // Modal function/
document.querySelector(".first").addEventListener('click', function(){
    Swal.fire("Disclaimer message...");
  });

});

