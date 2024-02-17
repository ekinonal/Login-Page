document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value.trim();
  var validationPassed = true;

  var usernameValidationMessage = document.getElementById('username-validation-message');
  var passwordValidationMessage = document.getElementById('password-validation-message');

  // Clear previous validation messages
  usernameValidationMessage.textContent = '';
  passwordValidationMessage.textContent = '';

  // Check if username is empty
  if (!username) {
      usernameValidationMessage.textContent = 'Please enter your username';
      validationPassed = false;
  }

  // Check if password is empty
  if (!password) {
      passwordValidationMessage.textContent = 'Please enter your password';
      validationPassed = false;
  }

  // If both fields are filled, show SweetAlert
  if (validationPassed) {
      swal({
          title: "Success!",
          text: "You are logged in!",
          icon: "success",
      });
  }
});
