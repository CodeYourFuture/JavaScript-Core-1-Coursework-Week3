"use strict";

/*
    A for-of loop is a easy and way of looping through the elements of an array, string or any other "iterable object" (think sequence of elements).    
*/
// TODO Use a for-of loop to output each of the tube stations below.
var tubeStations = ["Aldgate", "Baker Street", "Picadilly Circus", "Oxford Street", "Tottenham Court Road"];

for (var i = 0; i < tubeStations.length; i++) {
  console.log(tubeStations[i]);
} // TODO Use a for-of loop to capitalise and output each letter in the string seperately.


var str = "codeyourfuture";

for (var _i = 0; _i < str.length; _i++) {
  console.log(str[_i].toUpperCase());
}