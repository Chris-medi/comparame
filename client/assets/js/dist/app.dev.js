"use strict";

var botton_icon = document.getElementById('icon-hidden');
var input_password = document.getElementById('input-password');

function icon_hidden() {
  botton_icon.classList.toggle('fa-eye');
  botton_icon.classList.toggle('fa-eye-slash');
}

botton_icon.addEventListener('click', function () {
  icon_hidden();

  if (input_password.type == "password") {
    input_password.type = "text";
    setTimeout(function () {
      input_password.type = "password";
      icon_hidden();
    }, 4000);
  } else {
    input_password.type = "password";
  }
});