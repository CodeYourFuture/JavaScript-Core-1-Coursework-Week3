/*
    Loops can be useful when working with arrays.
    In the below example, imagine we've defined an array holding the birthdays of your closest friends.
    Use a while loop to search through the array until you find the first birthday in July, then return that birthday from the function.
*/

const BIRTHDAYS = [
  { b_month: "January", b_date: "7th" },
  { b_month: "February", b_date: "12th" },
  { b_month: "April", b_date: "3rd" },
  { b_month: "April", b_date: "5th" },
  { b_month: "May", b_date: "3rd" },
  { b_month: "July", b_date: "11th" },
  { b_month: "July", b_date: "17th" },
  { b_month: "September", b_date: "28th" },
  { b_month: "November", b_date: "15th" },
];

let birthdays = [];
function findFirstJulyBDay(birthdays) {
  let month = birthdays.find(function (month) {
    return month.b_month.indexOf("July") > -1;
  });
  return `${month.b_month} ${month.b_date}`;
}

console.log(findFirstJulyBDay(BIRTHDAYS)); // should output "July 11th"

//used find method
//https://www.freecodecamp.org/news/complete-introduction-to-the-most-useful-javascript-array-methods/
