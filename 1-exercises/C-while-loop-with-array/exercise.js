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

const HOLLIDAYS = ["March 1st", "July30th"];

// function findFirstJulyBDay(birthdays) {
//     let result = "";
//     for (let i = 0; i < BIRTHDAYS.length; i++) {
//         if(BIRTHDAYS.length === "July"){
//             let result = BIRTHDAYS.push[i];
//         }
//     }
//     return result;
// }

function findFirstJulyBDay(birthdays) {
    let result = "";
    let i = 0;
    while(result === ""){
        if(birthdays[i].includes("July") === true){
            result = birthdays[i];
        }
        i++;
    }
    return result;
}

console.log(findFirstJulyBDay(HOLLIDAYS)); // should output "July 11th"
