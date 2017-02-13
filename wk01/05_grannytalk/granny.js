console.log('Say what?');

var grannyTalk = function(input){
  // Generate random number between 1930 - 1950
  function randomYear (min, max) { //
    return Math.floor( Math.random() * (max - min + 1) + min);
  }
  var grannyYear = randomYear(1930,1950);

  if (input === 'BYE' ) {
    return "What's that honey, I didn't hear you..";
  } else if (input !== input.toUpperCase() )  {
    return 'SPEAK UP SONNY JIM';
  } else if (input.toUpperCase() ){
    return 'NO, NOT SINCE ' + grannyYear;
  }
};
