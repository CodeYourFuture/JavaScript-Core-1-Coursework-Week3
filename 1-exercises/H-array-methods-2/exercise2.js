/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let cap_str = str.split("");
  cap_str[0] = cap_str[0].toUpperCase();
  cap_str = cap_str.join("");

  return cap_str;
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
