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
for ( const element of tubeStations){
    console.log(element)
}


// TODO Use a for-of loop to capitalize and output each letter in the string separately.
let str = "codeyourfuture";

for (const letter of str) {
    console.log(letter.toUpperCase())
}
