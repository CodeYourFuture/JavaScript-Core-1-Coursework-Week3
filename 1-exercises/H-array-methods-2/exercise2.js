/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
 const capStr = "hello";
  const capStr2 = capStr.toUpperCase();
  const strGreeting = str.split();
//  strGreeting[0].toUpperCase();
  return strGreeting.join();
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
