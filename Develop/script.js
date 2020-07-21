// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Option StringArrays the user may choose from
var number = ["0 1 2 3 4 5 6 7 8 9"];
var specialCharacter = ["! # $ % & * + - . / : ; < = > ? @ [ ] ^ _ { | } ~"];
var lwrCase = ["a b c d e f g h i j k l m n o p q r s t u v w x y z"];
var uppCase = ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"];

// Splitting the String Arrays
var splitNum = number.split(" ");
var splitSpChar = specialCharacter.split(" ");
var splitLwrCase = lwrCase.split(" ");
var splitUppCase = uppCase.split(" ");

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
}
