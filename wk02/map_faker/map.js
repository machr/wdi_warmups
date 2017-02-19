var makeRow = function(mapLength){
  var mapRow = [];
  for(var itemInRow = 0; itemInRow < mapLength ; itemInRow++){
    mapRow.push("A");
  }
  return mapRow;
};

var makeRandomNumber = function(number){
  var randomNumber = Math.floor(Math.random() * (number-1));
  return randomNumber;
};

var replaceWithX = function(array){
  var mapArray = array;
  var randomRow = makeRandomNumber(mapArray[0].length);
  var randomColumn = makeRandomNumber(mapArray.length);
  mapArray[randomRow][randomColumn] = 'X';
  makeString(mapArray);
};
var makeColumn = function(mapLength,mapHeight){
  var mapArray = [];
  for(var numberLines = 0; numberLines < mapHeight; numberLines++){
    mapArray.push(makeRow(mapLength));
  }
  replaceWithX(mapArray);
};

var makeString = function(array){
  var finalMap = [];
  for(var everyLine = 0; everyLine < array.length ; everyLine++){
    finalMap += '['+ array[everyLine].join('","') + '] \n';
  }
  console.log('[\n' + finalMap + ']');
};
var createMap = function(row, column){
  makeColumn(row,column);
};
