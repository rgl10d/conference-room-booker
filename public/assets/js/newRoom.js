$( document ).ready(function() {
    console.log( "I am still working.");

    $(document).on("submit", function (event) {
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

});