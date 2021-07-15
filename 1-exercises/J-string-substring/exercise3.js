/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
const firstPart = statement.substring(0, 5);
const secondPart = statement.substring(10, statement.length);

let result = firstPart.concat(secondPart);

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
