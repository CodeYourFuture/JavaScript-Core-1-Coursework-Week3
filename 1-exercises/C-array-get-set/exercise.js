/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(numbers) {
  return numbers[0]; // complete this statement
}

function last(numbers) {
  return numbers[numbers-1];// complete this statement
}

function last(names) {
  return names[names.length-1];
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let numbers = [1, 2, 3];
let names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
