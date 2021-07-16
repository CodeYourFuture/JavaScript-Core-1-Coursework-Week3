/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

const names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

function findLongNameThatStartsWithA(name) {
  const firstIndex = 0;
  const findInArray = name.find(
    (element) => element.charAt(firstIndex) === "A" && element.length > 7
  );
  //element.find(element.length > 7)
  return findInArray;
}

const longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
