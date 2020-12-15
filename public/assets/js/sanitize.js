$( document ).ready(function() {
    console.log( "LET'S GET READY TO RUMBLEEEEEEEEEEEEEEEEEEEE!" );
    $(".check-in-btn").on("click", function(){
        if($(this).text() === "Check-In"){
            //SWEET ALERT GOES HERE
            $(this).text("Check-Out");
        $.ajax({
            method: "UPDATE",
            url: "/api/rooms",
        }).then((response) =>{
            window.location.replace("/rooms");
        });
        } else if($(this).text() === "Check-Out"){
            //SWEET ALERT GOES HERE
            $(this).text("Sanitize");
        $.ajax({
            method: "UPDATE",
            url: "/api/rooms",
        }).then((response) =>{
            window.location.replace("/rooms");
        });            
        }else if($(this).text() === "Sanitize"){
            //SWEET ALERT GOES HERE
            $(this).text("Check-In");
            $.ajax({
                method: "UPDATE",
                url: "/api/rooms",
            }).then((response) =>{
                window.location.replace("/rooms");
            }); 
        }
    });









    });