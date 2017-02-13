// var bob = [3, 2, 6, 11, 9, 2, 6, 9, 10];
// var jimbo = [ 5,12,9,22,13,7,16,10,11 ];
// var fish = [ 2,2,4,5,4,3,6,4,1,];

var totalScores = function(scores){
  var score = 0;
  for (var i = 0; i < scores.length; i++) {
    score += scores[i];
  }
  return score;
};

var golfers = {
  bob: {
    strokes:[3, 2, 6, 11, 9, 2, 6, 9, 10]
  },
  jimbo: {
    strokes:[ 5,12,9,22,13,7,16,10,11 ]
  },
  fish: {
    strokes:[ 2,2,4,5,4,3,6,4,1]
  },
  course: {
    strokes: [ 3,4,5,5,3,3,4,3,5 ]
  }

};
var arrayOfPlayers = Object.keys(golfers);

var coursePar = totalScores(golfers.course.strokes);
var bobsTotal = totalScores(golfers.bob.strokes);
var bobOverPar = bobsTotal - coursePar;

var jimboTotal = totalScores(golfers.jimbo.strokes);
var jimboOverPar = jimboTotal - coursePar;

var fishTotal = totalScores(golfers.fish.strokes);

var parCourse = ("Par for course is " + fishTotal + " strokes");
var bob = ("Bob's total was " + bobsTotal + ". Bob went " + bobOverPar + " strokes over par and owes Fish $" + bobOverPar);
var jimbo = ("Jimbo's total was " + jimboTotal + ". Jimbo went " + jimboOverPar +" strokes over par and owes Fish $" + jimboOverPar);
var fish = ("Fish's total was " + fishTotal + " and won $" + (bobOverPar + jimboOverPar) + " on sidebets");

// Grab the first html element with the class of '.bob'
document.querySelector('.bob').innerHTML = bob;
document.querySelector('.jimbo').innerHTML = jimbo;
document.querySelector('.fish').innerHTML = fish;
