///////PSUEDOCODE//////

//Prompt user that password must be 8-128 characters

//Confirm user needs UPPERCASE characters

//Confirm user needs lowercase characters

//Confirm numeric & special characters

//When all above statements are true then...

//Function executes password generator

//Create an object to store answers

///////////////////BEGIN CODE/////////////////////

// Variables with characters for password

var lowercase = ["a", "b", "c", "d", "e", "f"];

var uppercase = ["G", "H", "I", "J", "K", "L"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var symbols = ["!", "@", "#", "$", "%", "&", "*"];

//////////////GENERATE FUNCTIONS/////////////////

function generatePassword() {
  //Prompt for length of password
  var length = parseInt(
    prompt("How many characters would you like your password to be?")
  );
  if (length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }
  if (length > 128) {
    alert("Password must be less than 128 characters");
    return;
  }
  //Confirming different character requirements
  lowercase = confirm("Include lowercase characters?");
  uppercase = confirm("Include uppercase characters?");
  numeric = confirm("Include numeric characters?");
  symbols = confirm("Include special characters?");

  //Storing answers in object
  var passwordAnswers = {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numbers: numbers,
    symbols: symbols,
  };
  return passwordAnswers;
}

//Generating random characters
function random(arr) {
  var one = Math.floor(Math.random() * arr.length);
  var two = arr[one];
  return two;
}

//Random password
function generatedPassword() {
  for (var i = 0; i < length; i++) {
    random(arr).Math.random() * passwordAnswers;
    newPassword = generatedPassword();
  }
}

///////// GIVEN /////////

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
