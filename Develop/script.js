// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Option StringArrays the user may choose from
var number = "0123456789";
var specialCharacter = "!#$%&*?@^_~";
var lwrCase = "abcdefghijklmnopqrstuvwxyz";
var uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Splitting the String Arrays

var splitNum = number.split("");
var splitSpChar = specialCharacter.split("");
var splitLwrCase = lwrCase.split("");
var splitUppCase = uppCase.split("");
console.log(splitNum);
console.log(splitSpChar);
console.log(splitLwrCase);
console.log(splitUppCase);

// User will be asked the password length
function generatePassword() {
  var confirmLength = parseInt(
    prompt(
      "Please choose the length of the password you would like for it to be."
    )
  );
  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Please try again. Password must be between 8-128 characters long");
    var confirmLength = parseInt(
      prompt(
        "Please choose the length of the password you would like for it to be."
      )
    );
  }
  // Confirm options the user agrees to
  var confirmSpChar = confirm(
    "Press 'OK' if you would like to use Special Characters?"
  );
  var confirmLwrCase = confirm(
    "Press 'OK' if you would like to use Lower Case letters?"
  );
  var confirmUppCase = confirm(
    "Press 'OK' if you would like to use Upper Case letters?"
  );
  var confirmNum = confirm("Press 'OK' if you would like to use Numbers?");

  // Ensuring code is working
  console.log(confirmSpChar);
  console.log(confirmLwrCase);
  console.log(confirmUppCase);
  console.log(confirmNum);

  while (
    confirmSpChar !== true &&
    confirmLwrCase !== true &&
    confirmUppCase !== true &&
    confirmNum !== true
  ) {
    alert(
      "Please confirm at least one of the following: 'Special Character', 'Lower Case', 'Upper Case' 'Numbers'"
    );

    var confirmSpChar = confirm(
      "Press 'OK' if you would like to use Special Characters?"
    );

    var confirmLwrCase = confirm(
      "Press 'OK' if you would like to use Lower Case letters?"
    );
    var confirmUppCase = confirm(
      "Press 'OK' if you would like to use Upper Case letters?"
    );
    var confirmNum = confirm("Press 'OK' if you would like to use Numbers?");
  }

  // My character container
  var characterCont = [];

  // The result of random password
  var randomPass = [];

  // Adding the characters based on user confirming
  if (confirmSpChar == true) {
    console.log(characterCont);

    characterCont = characterCont.concat(splitSpChar);
  }
  if (confirmNum == true) {
    characterCont = characterCont.concat(splitNum);
  }

  if (confirmUppCase == true) {
    characterCont = characterCont.concat(splitUppCase);
  }

  if (confirmLwrCase == true) {
    characterCont = characterCont.concat(splitLwrCase);
  }

  console.log(characterCont);

  for (var i = 0; i < confirmLength; i++) {
    randomPass =
      randomPass +
      characterCont[Math.floor(Math.random() * characterCont.length)];
  }
  return randomPass;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
