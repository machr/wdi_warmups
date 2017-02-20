/**
# Question
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, -
each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

var s1 = "xyaabbbccccdefww";
var s2 = "xxxxyyyyabklmopq";
function makeLongestString(a, b){
  var alphabetArray = [];
  var longString = a.concat(b);

  // Convert characters to UpperCase (.sort() looks differently on upper and lowercase characters)
  longString = longString.toUpperCase();

  // make strings to array with split
  var stringToArray = longString.split('');
  // sort arrays in letter
  stringToArray = stringToArray.sort();
  // console.log(stringToArray);

  // push each letter in alphabetArray and check if the letter is already present
  for (var i = 0; i < stringToArray.length; i++) {
    // alternatively, put  '=== false' instead of '!' in if-statement
    if (!alphabetArray.includes(stringToArray[i])) {
      alphabetArray.push(stringToArray[i]);
    }
  }
  // join array, convert to upper-case and return string
  alphabetArray = alphabetArray.sort();
  alphabetArray = alphabetArray.join('');

  console.log(alphabetArray);
  // return alphabetArray;
}
