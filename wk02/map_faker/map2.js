// var makeMap = function(length, height){
 var length = 5;
 var height = 5;
 var mapRow = [];
 var map = [];

 for (var i = 0; i < length; i++) {
   mapRow.push('A');
 }
 var mapLine = mapRow.join('","');
 mapLine = '["' + mapLine + '"]';

 for (var m = 0; m < height; m++) {
   map.push(mapLine);
 }
 var finalMap = map.join(',\n');

 var mapLength = finalMap.length;
 var index = Math.floor(Math.random() * mapLength);
 var indexInString;
 if (finalMap.charAt(index) === "A"){
   finalMap.charAt(index).replace('A', 'X');
   console.log(finalMap);
 } else {
   console.log('Not this time');
 }

 // This prints the map
 // console.log(finalMap);
// };
