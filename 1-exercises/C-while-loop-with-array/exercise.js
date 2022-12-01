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

function findFirstJulyBDay(birthdays) {
  let text = "";
  let i = 0;
  // TODO
  //let arr = [];
  while (i < birthdays.length) {
    if (birthdays[i].includes("July")) {
      text = birthdays[i];
      return text;
    } else {
      i++;
    }
  }
  console.log(birthdays.includes("July"));
}
// note string prototype includes seems to work diffrently form
// the array prototype includes, array prototype includes seems
//more specific and returns false if the mactch is not exact
// string prototype inclues seems to work more like regex but
// only return true even if multiple accurence are found/
console.log(findFirstJulyBDay(BIRTHDAYS)); // should output "July 11th"
