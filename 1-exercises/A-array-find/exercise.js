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

const longNameThatStartsWithA = names.find(
  //   (element) => element.length > 7 && element.startsWith("A") (<=  using Arrow function.)
  // );
  function (element) {
    return element.length > 7 && element.startsWith("A"); //( using testing function method.)
  }
);

// console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
