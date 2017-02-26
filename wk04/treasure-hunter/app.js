var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"]
];
var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];
//
// var map3 = [
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","V","A"],
// ["v","v","V","v","X"],
// ["A","V","A","A","A"]
// ];
//
// var map4 = [
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","V","A"],
// ["v","v","V","v","A"],
// ["X","V","A","A","A"]
// ];

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

function treasureFinder(array, key){
  for (var i = 0; i < array.length; i++) {
    if ( array[i].includes(key) ) {
      var index = i + ", " + array[i].indexOf(key);
      document.querySelector('#coordinate').textContent = index;
    }
  }
}
// treasureFinder(holyGrailMap, 'H');
