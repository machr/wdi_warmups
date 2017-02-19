var heads = 0;
var tails = 0;
var flipCounter = 0;

var coinFlip = function(){

  var randomNumber = function() { //
    return Math.floor( Math.random() * 10 );
    // Alternatively use Math.round( Math.random() ) to return either 0 or 1;

  }; // end randomNumber function

  var result = randomNumber();
  if (result < 5) {
    heads++;
  } else if (result >= 5) {
    tails++;
  }


  // create conditional to display winner
  if (heads === 5 ) {
    winner = heads;
  } else if (tails === 5) {
    winner = tails;
  }
  flipCounter++;

};
console.log("number of heads: " + heads);
console.log("number of tails: " + tails);
console.log(flipCounter);
