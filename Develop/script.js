///////PSUEDOCODE//////

//Prompt user that password must be 8-128 characters

//Confirm user needs UPPERCASE characters

//Confirm user needs lowercase characters

//Confirm numeric & special characters

//When all above statements are true then...

//Function executes password generator

//Create an object to store answers

///////CODE////////

// Variables with characters for password

var lowercase = ["a", "b", "c", "d", "e", "f"];

var uppercase = ["G", "H", "I", "J", "K", "L"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var symbols = ["!", "@", "#", "$", "%", "&", "*"];

//////////////GENERATE FUNCTION/////////////////

function generatePassword() {
  var myPassword = "";
  var length = parseInt(
    prompt("How many characters would you like your password to be?")
  );
  //Length prompt
  if (length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }
  if (length > 128) {
    alert("Password must be less than 128 characters");
    return;
  }

  //Confirm for uppercase
  if (uppercase) {
    confirm("Include uppercase characters?");
  }

  //Confirm for lowercase
  if (lowercase) {
    confirm("Include lowercase characters?");
  }

  //Confirm for numeric values
  if (numbers) {
    confirm("Include numbers?");
  }

  //Confirm for special characters
  if (symbols) {
    confirm("Include special characters?");
  }

  var random = {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numbers: numbers,
    symbols: symbols,
  };

  return myPassword;
}

// function finalPassword() {
//   for (var i = 0; i < length; i++) {
//     random.Math.random
//   }
// }

// var length = parseInt(
//   prompt("How many characters would you like your password to be?")
// );
// if (length < 8) {
//   alert("Password must be at least 8 characters");
//   return;
// }
// if (length > 128) {
//   alert("Password must be less than 128 characters");
//   return;
// }
// lowercase = confirm("Include lowercase characters?");
// uppercase = confirm("Include uppercase characters?");
// numeric = confirm("Include numeric characters?");
// symbols = confirm("Include special characters?");

//   var passwordAnswers = {
//     length: length,
//     lowercase: lowercase,
//     uppercase: uppercase,
//     numbers: numbers,
//     symbols: symbols,
//   };
//   return passwordAnswers;
// }

// function random(arr) {
//   var one = Math.floor(Math.random() * arr.length);
//   var two = arr[one];
//   return two;
// }
//Function that returns the object providing the password based off of which ever amount of characters

//Function will use passwordAnswers, random(arr)

//function finalPassword

// function myPassword() {
//  var Endpassword = passwordAnswers[random];
//  return Endpassword;
// }

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
