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
Swal.fire("Covid Disaclaimer", "Due to the COVID-19 pandemic, City Schools has been exploring different and reasonable ways to provide services to all students. The District has worked with state and local agencies, including our local health department, to draft and implement guidelines moving forward regarding cleaning, screening, social distancing, etc. Though the District and its agents will work hard to implement and abide by those guidelines, neither the guidelines themselves nor even guidance from the Centers for Disease Control and Prevention (“CDC”) would allow the District to guarantee an environment that is entirely free of COVID-19 related risks. By allowing your child to return to campus, however, you acknowledge and understand that your child’s attendance will require him/her to physically interact with the District’s staff members, other students, and even volunteers. As such, despite reasonable mitigation efforts on behalf of the District, physical interaction with the public at large may pose some unavoidable risks to you, your child, and your family due to the COVID-19 pandemic. With that, you further acknowledge and agree to the following: 1. Waiver and Release. You hereby release and forever discharge and hold harmless the District and its agents from any and all liability, claims and demands of whatever kind or nature, either in law or in equity, which arise or may hereafter arise from your child’s return to campus and/or participation in activities associated with the District. You understand that this release discharges the District from any liability or claim that you may have against the District with respect to any bodily injury, personal injury, illness, or other issue that may result from your child’s return and/or participation, whether caused by the negligence of the District or its officers, directors, employees, or other agents, or by the negligence of others, or by the condition of the facilities or areas where District activities are being conducted. 2. Assumption of Risk. You further understand that your child’s return and/or participation may expose him/her and others to unavoidable COVID-19 community spread. As such, you hereby expressly and specifically assume the risk of injury or other harm, and also expressly release the District from all liability for injury, illness, or other issue resulting from or in any way related to your child’s return or participation. BY EXECUTING BELOW, YOU ACKNOWLEDGE HAVING READ AND UNDERSTOOD ALL OF THE ABOVE-TERMS AND CONDITIONS.");
});

