
//when user presses "Generate Password" button, this is the function it calls. 
function doPassword() {

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


  //this calls the pop-up input/ok/cancel box on the page prompting user for input on 
  //length and character types to use. these answers will be stored in memory, but not displayed. 
  //parseInt solution found at https://stackoverflow.com/a/15047174
  var wantLength = parseInt(prompt("enter password length (8-128 characters)"), 10);

  //this while loop makes sure the user enters valid number before continuing
  //constraint solution at stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working
  //also added isNan stipulation because letters will register as booleans and break stuff 
  //isNaN solution found at https://stackoverflow.com/questions/15047140/javascript-prompt
  //-number-and-continue-prompting-if-answer-is-wrong
  while (isNaN(wantLength) || wantLength < 8 || wantLength > 128) {
    wantLength = prompt("length must be between 8 and 128, please re-enter a valid length.");
  }

  //this do loop runs window.confirm sequence in which user specifies character types to 
  //include in the pw. 
  do {
    var wantLower = window.confirm("include lowercase letters?");
    var wantUpper = window.confirm("include uppercase letters?");
    var wantNumber = window.confirm("include numbers?");
    var wantSpecial = window.confirm("include special characters?");

    // variable any_selected = a true boolean in at least one of each of the variables 
    // assigned at the top of the do loop. 
    var any_selected = wantLower || wantUpper || wantNumber || wantSpecial;

    //if the there are no positive values in any_selected, the user is alerted that they need to choose at least one
    if (!any_selected) {
      alert("at least one type must be selected");
    }
    //re-calls the type selection windows 
  } while (!any_selected)

  //once type selection do loop finishes with at least one true, this checks variables 
  //wantLower/Upper/Number/Special sorts the trues into an array to be referenced in next step.  
  var selectedTypes = [];
  if (wantLower) {
    selectedTypes.push(randoLower);
  }
  if (wantUpper) {
    selectedTypes.push(randoUpper);
  }
  if (wantNumber) {
    selectedTypes.push(randoNumber);
  }
  if (wantSpecial) {
    selectedTypes.push(randoSpecial);
  }

  // for loop that actually produces the initial string of characters, iterates wantLength number
  //of times through the array of functions created in previous step. 
  var password = "";
  var j = 0;
  for (var i = 0; i < wantLength; i++) {
    password += selectedTypes[j]();
    j += 1;
    if (j == selectedTypes.length) {
      j = 0;
    }
  }

  //this method shuffles the string produced in previous loop
  //sourced from https://stackoverflow.com/a/13365977
  password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');


  //                          ✨ voila! ✨
  //writes var password into text field id="password" in html page. 
  document.getElementById("password").value = password;

}

