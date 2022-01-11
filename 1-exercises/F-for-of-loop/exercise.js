/*
    A for-of loop is an easy way of looping through the elements of an array, string or any other "iterable object" (think sequence of elements).    
*/

// TODO Use a for-of loop to output each of the tube stations below.
let tubeStations = [
    "Aldgate",
    "Baker Street",
    "Picadilly Circus",
    "Oxford Street",
    "Tottenham Court Road"
];

for(let stations of tubeStations){
    console.log(stations);
}

// TODO Use a for-of loop to capitalise and output each letter in the string separately.
let str = "codeyourfuture";

// for (str of tubeStations){
//     console.log(str.toUpperCase().split("").toString().replace(/,/g, ' '));
// }

for (let letters of str){
    console.log(letters.toUpperCase());
}