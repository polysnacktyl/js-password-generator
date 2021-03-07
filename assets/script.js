
// random decimal(math.random), rounded down(math.floor), multiplied by number of letters 
//in alphabet (*26) plus the start point of lowercase letters in browser character code
//(lowercase letters 97-122, uppers 65-90, numbers 48-57) returns corresponding letter of 
//random number generated in a string (return String.fromCharCode) 26 uppercase letters 
// are 65-90 in browser character codenumbers 0-9, 10 digit span from 48-57 in browser 
//character code special characters are all over the place and not all are can be used in 
//passwords. create a const list, and select random item by similar method, using 
//specials.length as the number to multiply with product of Math.floor and Math.random. 
function randoLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randoUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randoNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randoSpecial() {
  const specials = "~`! @#$%^&*()_-+={[}]|;'<,>.?/";
  return specials[Math.floor(Math.random() * specials.length)];
}

//console.loggin randoFunctions just to make sure they work 
console.log(randoLower());
console.log(randoUpper());
console.log(randoNumber());
console.log(randoSpecial() + " i am a random special character");

//here we invoke the pop-up input/ok/cancel box on the page prompting user for input on 
//length and character types to use. these answers will be stored in memory, but not displayed. 
//parseInt solution found at https://stackoverflow.com/a/15047174
var wantLength = parseInt(prompt("enter password length (12-128 characters)"), 10);

//this while loop makes sure the user enters valid number before continuing
//number constraint solution found at stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working
//also added isNan stipulation because letters will register as booleans and break stuff 
//isNaN solution found at https://stackoverflow.com/questions/15047140/javascript-prompt
//-number-and-continue-prompting-if-answer-is-wrong
while (isNaN(wantLength) || wantLength < 12 || wantLength > 128) {
  wantLength = prompt("length must be between 12 and 128, please re-enter a valid length.");
}
//the rest of the character type options record ok/cancel as true/false booleans 
var wantLower = window.confirm("include lowercase letters?");
var wantUpper = window.confirm("include uppercase letters?");
var wantNumber = window.confirm("include numbers?");
var wantSpecial = window.confirm("include special characters?");


//checks wantLower/Upper/Number/Special boolean values and adds true values 
//to an array which will iterate *wantLength number* times. 
var functions_we_actually_want_to_use = [];
if (wantLower) {
  functions_we_actually_want_to_use.push(randoLower);
}
if (wantUpper) {
  functions_we_actually_want_to_use.push(randoUpper);
}
if (wantNumber) {
  functions_we_actually_want_to_use.push(randoNumber);
}
if (wantSpecial) {
  functions_we_actually_want_to_use.push(randoSpecial);
}

// for loop that actually produces the initial string of characters, iterates wantLength number
//of times through the array of functions created in previous step. 
var password = "";
var j = 0;
for (var i = 0; i < wantLength; i++) {
  password += functions_we_actually_want_to_use[j]();
  j += 1;
  if (j == functions_we_actually_want_to_use.length) {
    j = 0;
  }
}

//this method shuffles the string produced in previous loop
//sourced from https://stackoverflow.com/a/13365977
password = password.split('').sort(function(){return 0.5-Math.random()}).join(''); 
console.log(password);





