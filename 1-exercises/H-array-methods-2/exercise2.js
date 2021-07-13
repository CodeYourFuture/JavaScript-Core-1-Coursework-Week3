/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  str = str.split(" ");
  //console.log(str);  //! for debug purpose
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

var name = "daniel";
let qoute = "made by ibmmtr";
console.log(capitalise(name));
console.log(capitalise("hello"));
console.log(capitalise(qoute));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
