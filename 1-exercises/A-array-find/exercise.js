/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

//Properties to filter by
var filterProperties = (element) => {
  return element.startsWith("A") && element.length > 7;
}

//filtering
function findLongNameThatStartsWithA(array){ 
  var toFind = array.find(filterProperties);
  return toFind;
}
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

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);


console.log(longNameThatStartsWithA);


/* EXPECTED OUTPUT */
// "Alexandra"
