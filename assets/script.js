

//put results from randoLower/Upper/Number/Special functions into objects 
const userSelectionsFunc = {
  lower: randoLower, 
  upper: randoUpper,
  number: randoNumber, 
  special: randoSpecial
}

//input/responses to these prompts will be stored, but not displayed. to see
//values(user input) assigned to these variables (thus far), enter variable name 
//into the console log. 
var wantLength = prompt("password length (8-128 characters)");
var wantLower = window.confirm("include lowercase letters?");
var wantUpper = window.confirm("include uppercase letters?");
var wantNumber = window.confirm("include numbers?");
var wantSpecial = window.confirm("include special characters?");



// //random decimal(math.random), rounded down(math.floor), 
// //multiplied by number of letters in alphabet (*26),
// //plus the start point of lowercase letters in browser character 
// //code (lowercase letters 97-122, uppers 65-90, numbers 48-57) 
// //returns corresponding letter of random number generated 
// //in a string (return String.fromCharCode) 26 uppercase letters 
// //are 65-90 in browser character code
// //numbers 0-9, 10 digit span from 48-57 in browser character code
// //special characters are all over the place and not all are 
// //can be used in passwords. create a const list, and select random item
// //by similar method, using specials.length as the number to multiply with 
// //decimal result of Math.floor and Math.random. 
function randoLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(randoLower());

function randoUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(randoUpper());

function randoNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(randoNumber());

function randoSpecial() {
  const specials = "~`! @#$%^&*()_-+={[}]|;'<,>.?/"; 
  return specials[Math.floor(Math.random() * specials.length)];
}
console.log(randoSpecial() + " i am a random special character");






