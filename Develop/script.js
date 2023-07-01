// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerLetters = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["1234567890"];
var symbols = ["!@#$%^&*()+=-?><~"];

var passwordText = "";
var passwordLength = 0;

function promptUser() {
  let sign = confirm("Would you like to include upper case letters, Y or N?");
  if(sign){
    passwordText += upperLetters;
  }
  
  sign = confirm("Would you like to include lower case letters, Y or N?");
  if(sign){
    passwordText += lowerLetters;
  }

  sign = confirm("Would you like to include numbers, Y or N?");
  if(sign){
    passwordText += numbers;
  }

  sign = confirm("Would you like to include symbols, Y or N?");
  if(sign){
    passwordText += symbols;
  }

  sign = prompt("How many characters would you like between 8 and 128?");
    passwordLength=sign;

}
  






//This should generate password
function generatePassword(){
  var newPassword = "";
  promptUser()
  const passwordCharacters = []
  for (let i = 0; i < passwordLength; i++){
    const password = passwordText[Math.floor(Math.random() * passwordLength)];
  }
    
  return newPassword;
    
}

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
