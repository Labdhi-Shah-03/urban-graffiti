function togglePasswordVisibility(icon) {
  var inputField = icon.previousElementSibling;
  if (inputField.type === "password") {
      inputField.type = "text";
      icon.innerHTML = '<img src="./assets/images/pass-hide.svg" alt="Show Password">';
     
  } else {
      inputField.type = "password";
      icon.innerHTML = '<img src="./assets/images/eye-slash.svg" alt="hidePassword">';
  }
}
