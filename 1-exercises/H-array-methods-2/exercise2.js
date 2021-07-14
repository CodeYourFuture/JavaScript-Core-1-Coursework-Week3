/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let strChangeArr = str.split(" ");
  for (var i = 0; i < strChangeArr.length; i++) {
    strChangeArr[i] =
      strChangeArr[i].charAt(0).toUpperCase() + strChangeArr[i].slice(1);
  }
  let newString = strChangeArr.join(" ");
  return newSting;s
};
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
