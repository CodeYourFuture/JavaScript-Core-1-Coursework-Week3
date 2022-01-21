"use strict";

/*
    A for-of loop is a easy and way of looping through the elements of an array, string or any other "iterable object" (think sequence of elements).    
*/
// TODO Use a for-of loop to output each of the tube stations below.
var tubeStations = ["Aldgate", "Baker Street", "Picadilly Circus", "Oxford Street", "Tottenham Court Road"];

for (var _i = 0, _tubeStations = tubeStations; _i < _tubeStations.length; _i++) {
  var item = _tubeStations[_i];
  console.log(item);
} // TODO Use a for-of loop to capitalise and output each letter in the string seperately.


var str = "codeyourfuture";

for (var i = 0; i < str.length; i++) {
  console.log(str[i].toUpperCase());
}