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

const tubeStations = [Aldgate", "Baker Street", "Picadilly Circus", "Oxford Street", "Tottenham Court Road"];
let text = " ";
for (let x of tubeStations) {
text += x;
}
//this seemed to work on the WS3 emulator - not working in VSCode// 

// TODO Use a for-of loop to capitalise and output each letter in the string seperately.
let str = "codeyourfuture";
