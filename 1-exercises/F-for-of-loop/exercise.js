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

let texts = "";
for (let x of tubeStations) {
  texts += x + "\n";
}
console.log(texts);

// for (let i = 0; i < tubeStations.length; i++) {
//   console.log(tubeStations[i]);
// }

// TODO Use a for-of loop to capitalise and output each letter in the string seperately.
let str = "codeyourfuture";

let text = "";
for (let x of str) {
  text += x + " ";
}
console.log(text);
