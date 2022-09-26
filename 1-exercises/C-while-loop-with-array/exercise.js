/*
    Loops can be useful when working with arrays.
    In the below example, 
    imagine we've defined an array holding the birthdays of your closest friends.
    Use a while loop to search through the array until you find the first birthday in July, 
    then return that birthday from the function.
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

console.log();

function findFirstJulyBDay(birthdays) {
  // TODO
// lets sort the array first a-z
  
  birthdays.sort();
  let i = 0;
  while (i < birthdays.length) {
    if (birthdays[i].includes('July')) {
      return birthdays[i]
    }
    i++
  }
  /*
  using for loop


  BIRTHDAYS.sort();
  for (let i = 0; i < birthdays.length; i++){
    if (birthdays[i].includes('July')) {
      return  birthdays[i]
    }

  }
  */
}

console.log(findFirstJulyBDay(BIRTHDAYS)); // should output "July 11th"

/*
let i = 0;
    while (birthdays[i] === 'July 11th') {
        console.log(birthdays[i])
        i++;
    }
    
    return birthdays[i] = birthdays[i];
*/