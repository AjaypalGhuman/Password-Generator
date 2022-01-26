var characterLength = 8;
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var specialCharactersArray = ['@', '%', '+', '/', '!', '#', '$', '^', '?', ':', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function choosePasswordLength() {
  var promptLength = window.prompt("Choose a password length between 8 to 128 characters.");
  
  if ((promptLength > 128) || (promptLength < 8)) {
    window.alert("Password must be AT LEAST 8 characters and no more than 128 characters!");
    return choosePasswordLength();
  } else {
    window.alert("Choose whether or not you would like to include lowercase letters in your password.");
    return promptLength;
  }
}
function chooseLowercase(){
  var promptLowercase = window.prompt("Do you wish to include lowercase letters in your password?");
}  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {}
