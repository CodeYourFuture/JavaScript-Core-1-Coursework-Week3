/*
    Loops can be useful when working with arrays.
    In the below example, imagine we've defined an array holding the birthdays of your closest friends.
    Use a while loop to search through the array until you find the first birthday in July, then return that birthday from the function.
*/

const BIRTHDAYS = [
    "January 7th",
    "February 12th",
    "April 3rd",
    "April 5th",
    "May 3rd",
    "July 11th",
    "July 17th",
    "September 28th",
    "November 15th"
];

function findFirstJulyBDay(birthday) {
    let i = 0
    while(i < birthday.length){
        if(birthday[i].startsWith('July')){
            return birthday[i];
        }
        i++
    }    
}

//this function will find the first word that start with July and will return it.
console.log(findFirstJulyBDay(BIRTHDAYS)); // should output "July 11th"

// String.prototype.startsWith()
// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
