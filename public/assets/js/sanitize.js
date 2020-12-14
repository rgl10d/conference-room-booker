$( document ).ready(function() {
    console.log( "LET'S GET READY TO RUMBLEEEEEEEEEEEEEEEEEEEE!" );
    // let cBtnsArray = [];

    // cBtnsArray.push($(".check-in-btn"));

    // function theIds(){
    //     let checkInBtnID = 0
    //     checkInBtnID++;
    //     for(i = 0; i++; i < cBtnsArray.length){
    //         cBtnsArray[i].attr("id", checkInBtnID);
    //     };
        
    // }
    $(".check-in-btn").on("click", function(){
        console.log("I was clicked");
        const checkInTxt = $(".check-in-btn");
        checkInTxt.text("Check-Out");

        this.dataValues.status.val(true);
        this.dataValues.status.text("Occupied");
    });









    });