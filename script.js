// Assignment Code

////my Arrays////
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var symbols = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var lenght;
var numPrompt;


var generateBtn = function document.querySelector ("#generate"); 
/////My Prompts/////

///Length prompt////
function getLength() {
    var length = prompt ("Please choose between 8 -128 characters for your password");
        if (length < 8){
        prompt ("Please choose between 8-128 characters");
        length();
    } else if (length >128){
        prompt ("Please choose between 8-128 characters");
        length();
    }else if (length (isNanN)){
        prompt ("Please choose between 8-128 characters");
        length();
    }
    return length:
}

////functions and prompts for the characters of the password// 
//Number prompt//
function getNumbers (){
    numPrompt = prompt ("Would you like to have numbers in your password");
        return numPrompt;

}
 
////Lowercase prompt///
function getLower (){
    lowerCasePrompt = prompt ("Would you like to have lower case characters in your password");
        return lowerCasePrompt;
}

////Uppercase prompt///
function getUpper () {
    upperCasePrompt = confirm ("Would you like to have upper case characters in your password");
        return upperCasePrompt;
}

//// Symbols prompt////
function getSymbols () {
    symbolsPrompt = confirm ("Would you like to have symbols in your password");
        return symbolsPrompt;
}
    



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 