// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


//Assignment Code 

//establishing that variable "generateBtn" points to document (linked html)
//and finds (via querySelctor) the element with id #generate. 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //*****Please note that result is a string. That means you should 
  //sometimes cast the value given by the user. For example, if 
  //their answer should be a Number, you should cast the value to Number*****
  //reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
  const aNumber = Number(window.prompt("Type a number", ""));
  var howLong = window.prompt("how many characters long?");
  alert(howLong);


  var password = generatePassword();
}

// //provides a list of special characters rather than 
   function getRandomSymbol() {
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
      return symbol[Math.floor(Math.random() * symbol.length)];
   }

    function getRandomUpperCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function getRandomLowerCase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function getRandomNumber(){
      return String.fromCharCode(Math.floor(Math.random()*10)+48);
   }
  

//   //references element id #password in linked html doc--textfield where 
//   //generated password will be displayed 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// }

// Add event listener to generate button