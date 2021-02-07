///password criteria requirements ///

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


// Assignment Code
var generateBtn = document.querySelector("#generate")

function generatePassword() {
  var length= 0
  var lowerCase = true
  var upperCase = true
  var numeric = true
  var symbols = true
  ///beginning prompt 
  if  (length < 8 || length > 128 || isNaN(length))  {
    length = prompt ("Please choose between 8 -128 characters for your password");
  }////prompts for choosing characters /// 
  else (!length || lowerCase || upperCase || numeric || symbols)) {
    numeric = confirm ("Would you like to have numbers in your password");
    lowerCase = confirm ("Would you like to have lower case characters in your password");
    upperCase = confirm ("Would you like to have upper case characters in your password");
    symbols = confirm ("Would you like to have symbols in your password");
  }

//build random password with for loop from 1 to length requested///
//randomly decide which criteria to use for the next character///
//randomly pick a character from the appropriate array/string and add to password being built 

//keep track of which criteria has been used
//if all criteria hasn't been used, redo random generation 

const PWordDone = " ";
  for (let i = 0; i < length; i++) {
    PWordDone = PWordDone.concat(
      numeric+lowerCase+upperCase+symbols(Math.floor(Math.random() * length))
      }
      return PWordDone
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)