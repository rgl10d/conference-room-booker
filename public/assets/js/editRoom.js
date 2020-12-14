$(document).ready(function () {
    var id = location.href.split("room/")[1];
    console.log(id);
    $(document).on("click", "#submit-edit-room", function (event) {
        event.preventDefault();
        const room = $("#roomName").val();
        const available = $(":radio:checked").val();
        // console.log(room)
        // console.log(available)

        let roomData = {
            name: room,
            status: available
        }
        let url = '/api/rooms/' + id;
        console.log(roomData);
        $.ajax({
            method: "PUT",
            url: url,
            data: roomData,
        }).then((response) => {
            console.log(response);
            window.location.replace("/rooms");
        });
    });
})