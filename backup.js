// SANITIZE.JS

// // const { default: Swal } = require("sweetalert2");
// $(document).ready(function () {
//     console.log("LET'S GET READY TO RUMBLEEEEEEEEEEEEEEEEEEEE!");
//     //To check-in
//     $(".check-in-btn").on("click", function () {
//       if ($(this).text() === "Check-In") {
//         const id = $(this).data("id");
//         console.log("ID: ", id);
//         // $(this).text("Check-Out");
//         Swal.fire({
//           title: "You have successfully checked into a room",
//           text: "Happy studying!",
//           icon: "success",
//           timer: 3000,
//         }).then((result) => {
//           $.ajax({
//             method: "PUT",
//             data: { status: true },
//             url: `/api/rooms/${id}`,
//           }).then((response) => {
//             console.log(response);
//             window.location.reload();
//           });
//         });
//         //To check-out
//       } else if ($(this).text() === "Check-Out") {
//         console.log("checking-out now");
//         const id = $(this).data("id");
//         Swal.fire({
//           title: "Leaving so soon?",
//           text: "Are you sure you want to leave?",
//           icon: "question",
//           showCancelButton: true,
//           cancelButtonText: "No, I want to stay",
//           confirmButtonColor: "#4962B",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "Yes, exit room",
//         }).then((result) => {
//           if (result.isConfirmed) {
//             // $(this).text("Sanitize");
//             Swal.fire({
//               title:
//                 "Good work! Click Sanitize to clean up the room for the next group.",
//               icon: "success",
//               timer: 3000,
//             }).then(() => {
//               $.ajax({
//                 method: "PUT",
//                 data: { needClean: true },
//                 url: `/api/rooms/${id}`,
//               }).then((response) => {
//                 window.location.reload();
//               });
//             });
//           } else {
//             $(this).text("Check-Out");
//             Swal.fire({
//               title: "No worries,",
//               text: "Back to studying!",
//               icon: "success",
//               timer: 2000,
//             });
//           }
//         });
//         //To sanitize
//       } else if ($(this).text() === "Sanitize") {
//         const id = $(this).data("id");
//         Swal.fire({
//           title: "Commencing sanitization",
//           text: "Click OK to begin room sterilization",
//           icon: "success",
//           preConfirm: true,
//           showLoaderOnConfirm: true,
//           timer: 6000,
//         }).then((result) => {
//           $(this).text("Check-In");
//           // AJAX to update status to "Available"
//           $.ajax({
//             method: "PUT",
//             data: { status: false, needClean: false },
//             url: `/api/rooms/${id}`,
//           }).then((response) => {
//             window.location.reload();
//           });
//         });
//       }
//     });
//   });
  


// ROOMS HANDLEBARS
// {{!-- Instructions and Create-Room "Button" --}}
// <div id="instructions">
//     {{!-- Rooms Dashboard Heading --}}
//     <div id="title-heading-div">
//         <h1 id="title-heading">
//             Rooms Dashboard
//         </h1>
//     </div>
//     <ul>
//         <li style="list-style-type: none;"> To get started, click the "Create a Room" button.</li>
//         <li style="list-style-type: none;">If the desired room is on the table and available, click "Check-In" to enter
//             the room.</li>
//         <li style="list-style-type: none;"> ** After check-out, click sanitize to have the room cleaned.**</li>
//     </ul>
//     <a href="/new" class="button round create-room">Create a Room</a>
// </div>
// {{!-- Table Code For the Rooms and Buttons --}}
// <div id="container-div">
//     <table class="dashboard-table">
//         <colgroup>
//             <col width="150" />
//             <col width="80" />
//             <col width="200" />
//             <col width="60" />
//             <col width="220" />
//             <col width="170" />
//         </colgroup>
//         <thead>
//             <tr>
//                 <th>
//                     <a href="#">Rooms<i class="fa fa-caret-down"></i></a>
//                 </th>
//                 <th>
//                     <a href="#" id="room-status">Room Status<i class="fa fa-caret-down"></i></a>
//                 </th>
//                 <th>
//                     <a href="#">Options<i class="fa fa-caret-down"></i></a>
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             {{#each rooms}}
//             <tr>
//                 <td>
//                     <div class="flex-container align-justify align-top">
//                         {{!-- <div class="flex-child-shrink">
//                         </div> --}}
//                         <div class="flex-child-grow">
//                             <h6 class="dashboard-table-text">{{name}}</h6>
//                             <!-- <span class="dashboard-table-timestamp">03/04/2017</span> -->
//                         </div>
//                     </div>
//                 </td>
//                 {{#if status}}
//                 <td data-id="{{status}}">Not Available</td>
//                 {{else}}
//                 <td data-id="{{status}}">Available</td>
//                 {{/if}}
//                 <td class="bold">
//                     {{#if showCheckOut}}
//                         <a class="button round check-in-btn" data-id="{{id}}">Check-Out</a>
//                     {{/if}}
//                     {{#if showSanitize}}
//                     <a class="button round check-in-btn" data-id="{{id}}">Sanitize</a>
//                     {{/if}}
//                     {{#if showCheckIn}}
//                      <a class="button round check-in-btn" data-id="{{id}}">Check-In</a>
//                     {{/if}}
//                     <a href="/room/{{id}}" class="button round">Edit Room</a>
//                     <a class="button round alert delete-room" data-id="{{id}}">Delete Room</a>
//                 </td>
//             </tr>
//             {{/each}}
//         </tbody>
//     </table>
// </div>



// </div>
// </div>
// {{!-- Link to the Javascript that does the check-in-to-check-out-to-sanitize features --}}
// <script type="text/javascript" src="/assets/js/sanitize.js"></script>
// <script src="assets/js/deleteRoom.js"></script>