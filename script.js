var characterLength = 8;
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var specialCharactersArray = ['@', '%', '+', '/', '!', '#', '$', '^', '?', ':', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}

function getPrompts() {
  characterLength = parseInt(prompt("How many characters would you like your password to be? Choose between 8 to 128 characters."));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be between 8 to 128 characters. Please put a valid response.");
    return false;
  }
}
