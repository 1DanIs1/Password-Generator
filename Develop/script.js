// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerLetters = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["1234567890"];
var symbols = ["!@#$%^&*()+=-?><~"];



function writePassword() {
  let sign = prompt("Would you like to include upper case letters, Y or N?");
  if(choice = "Y"){
    passwordText += upperLetters;
    else {
      return;
    }
  }
  

  let sign = prompt("Would you like to include lower case letters, Y or N?");
  if(choice = "Y"){
    passwordText += lowerLetters;
    else {
      return;
    }
  }


  let sign = prompt("Would you like to include numbers, Y or N?");
  if(choice = "Y"){
    passwordText += numbers;
    else {
      return;
    }
  }


  let sign = prompt("Would you like to include symbols, Y or N?");
  if(choice = "Y"){
    passwordText += symbols;
    else {
      return;
    }
  }

}
  // let sign = prompt("How many characters would you like between 8 and 128?");



// Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





