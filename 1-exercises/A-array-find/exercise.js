/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/
//PSEUDO CODE
//determine how long the name is
//what the start letter is
//both conditions need to be met

var names = [
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

//*started off with a function to determine name length > 7
//*used docs to find a method that looks at the start character
//*researched what find method did to see where I would need to initialize it with the array and IF both conditions were met
//*wrapped the function in the find method to return the value rather than result the expression (which evaluates to true)
const findLongNameThatStartsWithA = names.find(name => name.length > 7 && name.startsWith("A"));
console.log(findLongNameThatStartsWithA);

//var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

//console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
