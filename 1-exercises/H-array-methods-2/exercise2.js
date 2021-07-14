/**
 * /*
 *   Array methods - .join()
 *   -------------------------
 *   Complete the capitalise function
 *   It should return a string with the first letter in uppercase
 *   For example, capitailise("hello") should return "Hello"
 *   Tip: use the string method .split() and the array method .join()
 *
 * @format
 */

function capitalise(str) {
	let chars = str.split("");
	chars[0] = chars[0].toUpperCase();
	return chars.join("");
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
