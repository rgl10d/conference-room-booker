$( document ).ready(function() {
Swal.fire({
  title: "COVID-19 Disclaimer:",
  text:
    " I acknowledge and agree that by committing to attend the University as an on-campus residential student, I am voluntarily assuming any and all risks that notwithstanding the college's best efforts to implement and require compliance with these prevention and mitigation measures. I may be exposed to the coronavirus and may become ill with COVID-19, and that such exposure and illness may result in personal injury, illness, temporary or permanent disability , or even death. By clicking OK, you are legally agreeing to these statements.",
  allowOutsideClick: false,
  showCancelButton: true,
  confirmButtonText: "OK, I agree.",
  cancelButtonText: "Cancel"
}).then((result) =>{
  if(result.isConfirmed){
  }else{
    Swal.fire({
      icon: error,
      title: "HTTP 403 Error",
      text: "User may not enter site until terms and conditions are agreed to.",
      allowOutsideClick: false,
      showCancelButton: false,
      showConfirmButton: false
    });
    $.ajax({
      method: "POST",
      url: "/"
  })
  .then((response) =>{
      window.location.replace("/rooms");
  });;
  }

})
});
