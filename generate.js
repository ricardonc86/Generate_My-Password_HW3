// Assignment Code


////my Arrays////
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var length;



var generateBtn = document.querySelector("#generate");
/////My Prompts/////

///Length prompt////
function getLength(){
    var length = prompt ("Please choose between 8 -128 characters for your password");
        if (length < 8){
        prompt ("Please choose between 8-128 characters");
        length();
    } else if (length >128){
        prompt ("Please choose between 8-128 characters");
        length();
    }else if (isNaN(length)){
        prompt ("Please choose between 8-128 characters");
        length();
    }
    }

////functions and prompts for the characters of the password// 
//Number prompt//
function getNumbers(){
    numPrompt = confirm ("Would you like to have numbers in your password");
       

}
 
////Lowercase prompt///
function getLower(){
    lowerCasePrompt = confirm ("Would you like to have lower case characters in your password");
        
}

////Uppercase prompt///
function getUpper(){
    upperCasePrompt = confirm ("Would you like to have upper case characters in your password");
        
}

//// Symbols prompt////
function getSymbols(){
    symbolsPrompt = confirm ("Would you like to have symbols in your password");
       
}
    
////Function to take all prompts entries to make password //// 

function generatePassword(){
    getLength();
    getNumbers();
    getLower();
    getUpper();
    getSymbols();
           
    if (upperCasePrompt && numPrompt && symbolsPrompt){
      lowerCase += upperCase + numeric + symbols;
    
    }else if (upperCasePrompt && numPrompt){
      lowerCase += upperCase + symbols;
    
    }else if (numPrompt && symbolsPrompt){
      lowerCase += numeric + symbols;
    
    }else if (upperCasePrompt && symbolsPrompt){
      lowerCase += upperCase + symbols;
    
    }else if (upperCasePrompt){
      lowerCase += upperCase;
    
    }else if(numPrompt){
      lowerCase += numeric;
    
    }else if (symbolsPrompt){
      lowerCase += symbols;
    
    }else{
      lowerCase === lowerCase;
    }
    
      for(var i = 0; i < length; i++){
        password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      }
      return password;
    }
    
    // Write password to the #password input
    function writePassword() {
      var password = "";
      password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
    
      
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);