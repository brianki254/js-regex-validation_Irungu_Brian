// Wait until the page is loaded
document.addEventListener('DOMContentLoaded', function() 
{
  // Get all the form input elements
  var fullNameInput = document.getElementById('fullName');
  var emailInput = document.getElementById('email');
  var phoneInput = document.getElementById('phone');
  var passwordInput = document.getElementById('password');  
  //real time validation and error messages
  fullNameInput.addEventListener('input', function() { validateFullName(this); });
  emailInput.addEventListener('input', function() { validateEmail(this); });
  phoneInput.addEventListener('input', function() { validatePhone(this); });
  passwordInput.addEventListener('input', function() { validatePassword(this); });
});
 //Validate Full Name
function validateFullName(fullNameField) 
{
  var fullNameValue = fullNameField.value;
 //allow letters and spaces
  var namePattern = /^[a-zA-Z\s]+$/; 
  // Check the name 
  if (!namePattern.test(fullNameValue)) 
  { 
    // If name is invalid , red border for errors
    fullNameField.classList.add('error');
    //error message
    document.getElementById('fullNameError').textContent = 
      'Name can only contain letters and spaces.';
    return false;
  } 
  else 
  {
   // If name is valid
    fullNameField.classList.remove('error');
    document.getElementById('fullNameError').textContent = '';
    return true;
  }
}
//Validate Email
function validateEmail(emailField) 
{
  var emailValue = emailField.value;
  // Check the email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
  if (!emailPattern.test(emailValue)) 
  {
	// If email is invalid , red border for errors
    emailField.classList.add('error');
    document.getElementById('emailError').textContent = 'Please enter a valid email (example@domain.com).';
    return false;
  } 
  else 
  {
    emailField.classList.remove('error');
	document.getElementById('emailError').textContent = '';
    return true;
  }
}
//Validate Phone Number
function validatePhone(phoneField) 
{
  var phoneValue = phoneField.value;
  // Check the number,10-15 digits only
  var phonePattern = /^\d{10,15}$/; 
  if (!phonePattern.test(phoneValue)) 
  {
	  // If number is invalid , red border for errors
    phoneField.classList.add('error');
    document.getElementById('phoneError').textContent = 'Phone must be 10-15 digits (numbers only).';
    return false;
  } 
  else
  {
    phoneField.classList.remove('error');
    document.getElementById('phoneError').textContent = '';
    return true;
  }
}

//Validate Password
function validatePassword(passwordField)
{
  var passwordValue = passwordField.value;
  //At least 8 characters,one uppercase letter,one lowercase letter,one number
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordPattern.test(passwordValue)) 
  {
	  // If password is invalid , red border for errors
    passwordField.classList.add('error');
    document.getElementById('passwordError').textContent = 'Password needs at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.';
    return false;
  } 
  else 
  {
    passwordField.classList.remove('error');
    document.getElementById('passwordError').textContent = '';
    return true;
  }
}
// Validate form to allow submition
function validateForm()
{
  // Get all form elements
  var fullNameField = document.getElementById('fullName');
  var emailField = document.getElementById('email');
  var phoneField = document.getElementById('phone');
  var passwordField = document.getElementById('password');  
  // Validation results 
  var isNameValid = validateFullName(fullNameField);
  var isEmailValid = validateEmail(emailField);
  var isPhoneValid = validatePhone(phoneField);
  var isPasswordValid = validatePassword(passwordField);
  // If all validations are true
  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid == true)
	{
    // Show success message and submit
    document.getElementById('successMessage').style.display = 'block';
    return true;
	} 
	else
	{
    // If any check fails prevent submission
    return false;
	}
}
