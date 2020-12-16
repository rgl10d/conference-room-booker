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
    // Updated the font disclaimer//
//   Removed the event listener so that the modal pops up whn th page loads
Swal.fire("Covid-19 Disaclaimer", "I acknowledge and agree that by committing to attend the University as an on-campus residential student, I am voluntarily assuming any and all risks that notwithstanding the college's best efforts to implement and require compliance with these prevention and mitigation measures I may be exposed to the coronavirus and may become ill with COVID-19, and that such exposure and illness may result in personal injury, illness, temporary or permanent disability , or even death. By clicking confirm, you are legally agreeing to these statements.");
});

