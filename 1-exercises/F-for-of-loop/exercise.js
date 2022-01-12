/*
    A for-of loop is a easy and way of looping through the elements of an array, string or any other "iterable object" (think sequence of elements).    
*/

// TODO Use a for-of loop to output each of the tube stations below.
let tubeStations = [
  "Aldgate",
  "Baker Street",
  "Picadilly Circus",
  "Oxford Street",
  "Tottenham Court Road",
];

function outputStations(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]}`);
  }
}

// TODO Use a for-of loop to capitalise and output each letter in the string seperately.
let str = "codeyourfuture";

function capLetter(word) {
  for (let i = 0; i < word.length; i++) {
    console.log(`${word[i].toUpperCase()}`);
  }
}
