/* 
  You are given an statement
  You should remove the word "not" by using .substring() and log the result.
  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let removeSentenceFromStatement=statement.substring(0,4)  
let restOfStatement=statement.substring(9); 
let result = `${removeSentenceFromStatement} ${restOfStatement}`; 

console.log(result);

/* EXPECTED OUTPUT 
  "I do like programming"
  
*/