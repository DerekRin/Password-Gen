// Assignment code here
//I understand that this won't be great, I'm getting a tutor monday to help explain these concepts more in depth and I plan to re-submit this at a later date. I apologize for my effort this time around. I promise to not dissapoint again.

console.log("Would you like to generate a password?");
console.log("Would you like lower case letters?");
console.log("Would you like upper case letters?");
console.log("Would you like to use numbers?");
console.log("Would you like to use special characters?");

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
}

function generatePassword() {
    var start = window.confirm("Would you like to generate a password?");
    var lower = window.confirm("Would you like to use lower case letters?");
      if (lower) {
      criteria.push(lowercase);
      String[lowercase] = new string[8];  
      console.log(criteria);
      return generatePassword;      
    }
    //var upper = window.confirm("Would you like to use upper case letters?");
    //var numbers = window.confirm("Would you like to use numbers?");
    //var special = window.confirm("Would you like to use special characters?");

  }

var criteria = [];

var lowercase = "abcdefghijklomnpqrstuvwxyz";
//var uppercase = lowercase.toUpperCase();
//var numberic = "0123456789";
//var specialchar = "!@#$%&*";




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
