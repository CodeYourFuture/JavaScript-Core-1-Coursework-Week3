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

let station = "";
for (const index of tubeStations) {
    station += index;
    console.log(index);
}

// TODO Use a for-of loop to capitalise and output each letter in the string seperately.
let str = "codeyourfuture";
let letters = "";

for (const CYF of str) {
    letters += CYF;
    CYF + "";
    console.log(CYF.toUpperCase());
}


