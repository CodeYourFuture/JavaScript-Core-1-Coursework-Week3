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

let newString = "";

for (let station of tubeStations) {
  newString += station + "<br>";
  console.log(station);
}
console.log("")
// TODO Use a for-of loop to capitalise and output each letter in the string seperately.
let str = "codeyourfuture";
let newStr = " ";

for (let element of str) {
  newStr += element + "<br>";
  console.log(element.toUpperCase());
}
