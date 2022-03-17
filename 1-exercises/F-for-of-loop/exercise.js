/*
    A for-of loop is a easy and way of looping through the elements of an array, string or 
    any other "iterable object" (think sequence of elements).    
*/

// TODO Use a for-of loop to output each of the tube stations below.

let tubeStations = ["Aldgate", "Baker Street", "Picadilly Circus", "Oxford Street",
                     "Tottenham Court Road" ];

for (let stations of tubeStations) {
    //console.log(stations);
     console.log(stations.toUpperCase()); //it's not the question requirement but I used method .toUpperCase to convert every element in upper case as well
}

 
// TODO Use a for-of loop to capitalise and output each letter in the string seperately. 

let str = "codeyourfuture"; 
for (let capLetters of str) { 
    console.log(capLetters.toUpperCase()); 
}