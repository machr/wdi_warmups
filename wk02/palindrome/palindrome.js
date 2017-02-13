/////////////////// TO DO ///////////////////

//  Add text input field, to capture input string
//  add delay to check if its a palindrome on key-up while typing

/////////////////// TO DO ///////////////////


var palindrome = function (string){
  var input = string;
  // // set reverse string as variable for comparison
  var inputReverse = input.split("").reverse().join("");
  // make comparison
  // get the Elements for displaying result
  var inputDiv = document.querySelector('.input');
  var outputDiv = document.querySelector('.output');
  var submit = document.querySelector('.submitBtn');

  inputDiv.innerHTML = "Input string was: " + input;

  if (input === inputReverse) {
    outputDiv.classList.remove("failure");
    outputDiv.classList.add("success");
    outputDiv.innerHTML = "It's a palindrome";

  } else {
    outputDiv.classList.remove("success");
    outputDiv.classList.add("failure");
    outputDiv.innerHTML = "It's not a palindrome";
  }

};


// var palindrom = function (string){
//   submit.on('click',function(){
//     // grab string,
//     var input = document.getElementById('textInputId').value;
//     // // set reverse string as variable for comparison
//     var inputReverse = input.split("").reverse().join("");
//     // make comparison
//     // get the Elements for displaying result
//     var inputDiv = document.querySelector('.input');
//     var outputDiv = document.querySelector('.output');
//     var submit = document.querySelector('.submitBtn');
//
//     if (input === inputReverse) {
//       outputDiv.innerHTML = "It's a palindrom";
//     }else {
//       outputDiv.innerHTML = "It's not a palindrom";
//     }
//   });
// };
