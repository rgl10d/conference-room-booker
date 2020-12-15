$(document).ready(function () {
  $(".delete-room").on("click", function () {
    const id = $(this).data("id");
    Swal.fire({
      title: 'Do you want to delete this room?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
          $.ajax({
            method: "DELETE",
            url: `/api/rooms/${id}`,
          }).then((response) => {
            window.location.reload();
          })
      }
    })
  });
});