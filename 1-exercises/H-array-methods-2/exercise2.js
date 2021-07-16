/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  const splitStr = str.split("");
  const firstLetter = splitStr[0].toUpperCase();
  splitStr[0] = firstLetter;
  const finishedArray = splitStr.join("");

  return finishedArray;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
const name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
