// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

/////My Prompts and characters for password /////
function generatePassword (){
///Length prompt////
     var length = (prompt ("Please choose between 8 -128 characters for your password"));
        if (length < 8){
        prompt ("Please choose between 8-128 characters");
        length();
    } else if (length >128){
        prompt ("Please choose between 8-128 characters");
        length();
    }else if (isNaN(length)){
        prompt ("Please choose between 8-128 characters");
        length();
    }else {
    var numPrompt = confirm ("Would you like to have numbers in your password");
    var lowerCasePrompt = confirm ("Would you like to have lower case characters in your password");
    var upperCasePrompt = confirm ("Would you like to have upper case characters in your password");
    var symbolsPrompt = confirm ("Would you like to have symbols in your password");

    
    ///characters////
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numeric = "123456789";
    var symbols = "!@#$%^&*?";
    var characters = "";
    }


//// for the characters of the password// 
if (numPrompt) {
  characters += numeric;
}
if (upperCasePrompt) {
  characters += upperCase;
}
if (lowerCasePrompt) {
  characters += lowerCase;
}
if (symbolsPrompt) {
  characters += symbols;
}

if (characters == "") {
  confirm("Password must include at least one character choice");
  
}

////Function and loop to take all prompts entries to make password //// 
do {
  var newPassword = "";
    for (var i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(newPassword)
    var hasSymbols = false;
    var hasLowercase = false;
    var hasUppercase = false;
    var hasNumeric = false;
    

    for (var i = 0; i < newPassword.length; i++) {
      var Pass = newPassword[i];

      if (lowerCase.includes(Pass)) {
        hasLowercase = true;
      } else if (upperCase.includes(Pass)) {
        hasUppercase = true;
      } else if (numeric.includes(Pass)) {
        hasNumeric = true;
      } else if (symbols.includes(Pass)) {
        hasSymbols = true;
      }
    }
  } while (
    (lowerCasePrompt && !hasLowercase) ||
    (upperCasePrompt && !hasUppercase) ||
    (numPrompt && !hasNumeric) ||
    (symbolsPrompt && !hasSymbols)
  )

  // return newPassword;
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);