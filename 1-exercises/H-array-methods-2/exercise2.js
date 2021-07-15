/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/
//Pseudo
//split str to substrings of letters with .split()
//capitalise 1st letter with .toUpperCase()
//join split letters 
function capitalise(str) {

  const splitName = str.split(""); //splits name into array of letters
  splitName[0] = splitName[0].toUpperCase(); //1st element capitalised and updated in splitName
  const joinedCapped = splitName.join(""); //joins splitName array back into 1 word

  return joinedCapped; // returns array of letters
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
