# <Javascript Password Generator>

## Description
This application generates a randomized string of characters based on input from a user. 

## Features 
Users can: 
    <ul>
    <li>set length within a provided range</li>
    <li>select 1-4 character types to include</li> 
    </ul>

## Installation
This Javascript application runs in-browser; its code can be cloned by pasting the following into your command line: 
```git clone https://github.com/polysnacktyl/js-password-generator.git```

## Usage 
<ol>
<li>click generate button to start application</li>
<li>enter a number for desired password length in text box </li>
<li>click okay to include or cancel to exclude on each character type as they are presented </li>
<li>generated password will appear in the text field on the page </li>
<li>select and copy </li>
</ol>

setting length | choosing character type
------------ | -------------
![image](/assets/images/length.png)| ![image](/assets/images/types.png)

## Credits
Solution for preventing non-number input for length provided by [Rob M.](https://stackoverflow.com/users/693275/rob-m) in [this Stack Overflow thread](https://stackoverflow.com/questions/15047140/javascript-prompt-number-and-continue-prompting-if-answer-is-wrong)

Solution for shuffling the generated string of characters provided by [Joel Mellon](https://stackoverflow.com/users/430151/joel-mellon) in [this Stack Overflow thread](https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript/13365977#13365977)

Function code for random character generation originally provided by [Florin Pop](https://codepen.io/FlorinPop17), viewable on his [his CodePen](https://codepen.io/FlorinPop17/pen/BaBePej) and demonstrated by [Brad Traverysy](https://traversymedia.com/) in [this YouTube video](https://www.youtube.com/watch?v=duNmhKgtcsI&t=914s)

## Contributions
For questions or contributions to this project, contact polysnacktyl@gmail.com

## Testing
Quality of passwords produced by this generator were [tested for stregth](https://www.comparitech.com/privacy-security-tools/password-strength-test/). As expected, when users choose longer passwords with multiple character types, strong passwords are produced. 

![image](/assets/images/test.png)

