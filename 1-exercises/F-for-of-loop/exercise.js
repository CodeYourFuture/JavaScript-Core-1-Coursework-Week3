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
for (let letter of tubeStations) {
    console.log(letter);
}
console.log("_____________________");
// TODO Use a for-of loop to capitalise and output each letter in the string seperately.
let str = "codeyourfuture";
let capitalise = "";
for (let letter of str) {
    capitalise += letter.toUpperCase();
    console.log(letter.toUpperCase());
}
console.log("_____________________");
console.log(capitalise);