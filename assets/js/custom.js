function togglePasswordVisibility(icon) {
  var inputField = icon.previousElementSibling;
  if (inputField.type === "password") {
      inputField.type = "text";
      icon.innerHTML = '<img src="assets/image/pass-hide.svg" alt="Show Password">';
     
  } else {
      inputField.type = "password";
      icon.innerHTML = '<img src="assets/image/eye-slash.svg" alt="hidePassword">';
  }
}
