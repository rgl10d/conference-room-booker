$(document).ready(function () {
  $(".delete-room").on("click", function () {
    const id = $(this).data("id");
    console.log(id);
    $.ajax({
      method: "DELETE",
      url: `/api/rooms/${id}`,
    }).then((response) => {
      window.location.reload();
    });
  });
});
