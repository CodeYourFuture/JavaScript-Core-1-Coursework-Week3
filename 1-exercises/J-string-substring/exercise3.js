/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let result = statement.substring(0, 4) + statement.substring(8, statement.length);

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
