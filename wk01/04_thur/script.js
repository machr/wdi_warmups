// create starter arrays for later use
var board = [];
var odd = [];
var even = [];

// #############    TO-DO    #############
// make a prompt to ask user to chose which symbol to use
// set the choice to a varible for use in the push() methods.

// Make a prompt that get the desired length and height of the board
// Put those values in variables to use in the loops

// Create a line of characters for the odd lines on the chessboard
// by 'pushing' characters in an array for later use


for (var i = 0; i <= 10; i++) {
  if (i % 2 !== 0 ) {
    odd.push('#');
  } else {
    odd.push(' ');
  }
}

// Create a line of characters for the even lines on the chessboard
for (var i = 0; i <= 10; i++) {
  if (i % 2 !== 0 ) {
    even.push(' ');
  } else {
    even.push('#');
  }
}

// Convert arrays that hold the characters to strings for later display
var evenline = even.join('');
var oddline = odd.join('');

// push our newly made strings into a new array that will become the chessboard
for(var b = 0; b <= 10; b++){
  if (b % 2 === 0) {
    board.push(evenline);
  } else {
    board.push(oddline);
  }
}

// Create a new line between the values in the board array to create the look of a chessboard
var chessboard = board.join('\n');

console.log(chessboard);
