// const { default: Swal } = require("sweetalert2");


$( document ).ready(function() {
    console.log( "LET'S GET READY TO RUMBLEEEEEEEEEEEEEEEEEEEE!" );
//To check in
    $(".check-in-btn").on("click", function(){
        if($(this).text() === "Check-In"){
            $(this).text("Check-Out");
            console.log($(this).data("status"));  
            Swal.fire({
                    title: 'You have successfully checked into a room',
                    text: "Happy studying!",
                    icon: 'success',
                    timer: 3000
                }).then((result) => {
                    $.ajax({
                        method: "POST",
                        url: "/api/rooms",
                    }).then((response) =>{
                        window.location.replace("/rooms");
                    });
                });
        }else if($(this).text() === "Check-Out"){
            console.log("checking-out now");
            Swal.fire({
                title: 'Leaving so soon?',
                text: "Are you sure you want to leave?",
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'No, I want to stay',
                confirmButtonColor: '#4962B',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, exit room'
                }).then((result) =>{
                    if(result.isConfirmed){
                        $(this).text("Sanitize");
                        Swal.fire({
                            title: 'Good work! Click Sanitize to clean up the room for the next group.',
                            icon: 'success',
                            timer: 5000
                            })
                    }else{
                        $(this).text("Check-Out");
                        Swal.fire({
                            title: 'No worries,',
                            text: "Back to studying!",
                            icon: 'success',
                            timer: 3000
                        })

                    }
                })
        }else if($(this).text() === "Sanitize"){

        }
    });
    });
          




