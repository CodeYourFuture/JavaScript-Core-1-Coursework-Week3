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

let newStr = "";
for (let i of tubeStations) {
    newStr += i;
    console.log(i);

}

// TODO Use a for-of loop to capitalise and output each letter in the string seperately.
let str = "codeyourfuture";
let otherStr = "";
for (let i of str) {
    otherStr +=i;
    console.log(i.toUpperCase());
}
