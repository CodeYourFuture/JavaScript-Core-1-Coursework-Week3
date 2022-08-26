// let arr = [1, 2, 3, 4, 5]
// arr.push(6)

// console.log(arr)

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

function findFirstJulyBDay(birthdays) {
     let i = 0;
     let birthday;
     while (i < birthdays.length) {
        if (birthdays[i].includes("July")) {
             birthday = birthdays[i];
             i++
        }
        i++;
     }
    return birthday
}

console.log(findFirstJulyBDay(BIRTHDAYS)); // should output "July 11th"

// console.log(BIRTHDAYS.find("July"))