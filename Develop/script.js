// Assignment code here

var randomNumber = function(max) {
  var value = Math.floor(Math.random() * max);

  return value;
}

function generatePassword() {
    var password = "";
    var start = window.confirm("Would you like to generate a password?");
    var lower = window.confirm("Would you like to use lower case letters?");
      if (lower) {
      criteria = criteria + lowercase;
    console.log(criteria.charAt(randomNumber(criteria.length)));     
    }

    var upper = window.confirm("Would you like to use upper case letters?");
    if (upper) {
    criteria = criteria + uppercase;
    console.log(criteria.charAt(randomNumber(criteria.length)));
    }   

    var numbers = window.confirm("Would you like to use numbers?");
    if (numbers) {
      criteria = criteria + numberic;
      console.log(criteria.charAt(randomNumber(criteria.length)));
    }

    var special = window.confirm("Would you like to use special characters?");
    if (special) {
      criteria = criteria + specialchar;
      console.log(criteria.charAt(randomNumber(criteria.length)));
    }

    for (var i = 0; i < 8; i++) {
      password += criteria.charAt(randomNumber(criteria.length));
      console.log(password);
    }
    return password;
}

var criteria = "";

var lowercase = "abcdefghijklomnpqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numberic = "0123456789";
var specialchar = "!@#$%&*";




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (DONE)
generateBtn.addEventListener("click", writePassword);
