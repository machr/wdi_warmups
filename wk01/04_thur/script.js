// create starter arrays for later use
var board = [];
var odd = [];
var even = [];

// Create a line of characters for the odd lines on the chessboard
// by 'pushing' characters in an array for later use
for (var i = 0; i <= 9; i++) {
  if (i % 2 !== 0 ) {
    odd.push('#');
  } else {
    odd.push(' ');
  }
}

// Create a line of characters for the even lines on the chessboard
for (var i = 0; i <= 9; i++) {
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
for(var b = 0; b <= 9; b++){
  if (b % 2 === 0) {
    board.push(evenline);
  } else {
    board.push(oddline);
  }
}

// Create a new line between the values in the board array to create the look of a chessboard
var chessboard = board.join('\n');

console.log(chessboard);
