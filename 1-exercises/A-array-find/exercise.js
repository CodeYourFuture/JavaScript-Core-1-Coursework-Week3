/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

const names = [
  "Rakeshdff",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

function findLongNameThatStartsWithA( name){

  const firstLetter =name.charAt(0);
  
  return name.length>7 && firstLetter==="A" ;
}

const longNameThatStartsWithA = names.find(findLongNameThatStartsWithA)

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
