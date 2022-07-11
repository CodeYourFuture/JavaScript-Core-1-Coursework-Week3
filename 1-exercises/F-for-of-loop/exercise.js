/*
    A for-of loop is a easy and way of looping through the elements of an array, string or any other "iterable object" (think sequence of elements).    
*/

// TODO Use a for-of loop to output each of the tube stations below.
let tubeStations = [
    "Aldgate",
    "Baker Street",
    "Picadilly Circus",
    "Oxford Street",
    "Tottenham Court Road"
];


// TODO Use a for-of loop to capitalize and output each letter in the string seperately.
let str = "codeyourfuture";

// TODO 1
for (let i = 0; i < tubeStations.length; i++) {
const index = tubeStations[i];
console.log(index);
}

// TODO 2
let capture = ""
for (let i = 0; i < str.length;  i++) {
    capture += str[i];
}

console.log(capture.toUpperCase());