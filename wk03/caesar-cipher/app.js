var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var shifted = "DEFGHIJKLMNOPQRSTUVWXYZABC";
var message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH";
// iucg
alphabet = alphabet.split('');
shifted = shifted.split('');
message = message.split('');
// find index of character from message in Alphabet - set that index to the index in shifted array
// Return new character from shifted

message.map(function(character){
  indexOfChar = alphabet.indexOf(character);
  var decoded;
  for (var i = 0; i < message.length; i++) {
    decoded = shifted[indexOfChar];
    return decoded;
  }
  var decodedMessage = decoded.join('');
  console.log( decodedMessage );
});
