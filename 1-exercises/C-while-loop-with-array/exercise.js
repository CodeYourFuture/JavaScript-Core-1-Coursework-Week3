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
    "November 15th",
];

// let July1 = BIRTHDAYS.filter((x) => x.split(" ")[0] === "July");
// console.log(July1.sort()[0]);

// Good use of split and index here.You could also use "break"
// to exit the
// while loop once you have found the first July date.

function findFirstJulyBDay(birthdays) {
    let july = [];
    let count = 0;

    while (count < birthdays.length) {
        if (birthdays[count].split(" ")[0] === "July") {
            july.push(birthdays[count]);
            break;
        }
        count++;
    }
    return july.sort()[0];
}

console.log(findFirstJulyBDay(BIRTHDAYS)); // should output "July 11th"