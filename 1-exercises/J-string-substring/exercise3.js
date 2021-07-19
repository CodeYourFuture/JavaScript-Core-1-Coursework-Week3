/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let part1 = statement.substring(0, 4);
let part2 = statement.substring(8, statement.length);

console.log(part1 + part2);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/

// test passed
