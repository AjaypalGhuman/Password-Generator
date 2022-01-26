var characterLength = 8;
var choiceArray = [];
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
  var correctPrompts = getPrompts();

  if (correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = newPassword;
  }

}

// Random password is generated according to the selected prompts.
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArray = [];

  characterLength = parseInt(prompt("How many characters would you like your password to be? Choose between 8 to 128 characters."));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be between 8 to 128 characters. Please put a valid response.");
    return false;
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(uppercaseArray);
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowercaseArray);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArray = choiceArray.concat(numbersArray);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharactersArray);
  }
  return true;
}
