/*
    A for-of loop is a easy and way of looping through the elements of an array, string or any other "iterable object" (think sequence of elements).    
*/

// TODO Use a for-of loop to output each of the tube stations below.
let tubeStations = [
   
    "Picadilly Circus",
    
];

for (stations of tubeStations){
    console.log(stations)
}



// TODO Use a for-of loop to capitalise and output each letter in the string seperately.

let str = "codeyourfuture";
for (char of str){
    console.log(char.toUpperCase())
}