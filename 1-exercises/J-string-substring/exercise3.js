/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let firstStat = statement.substring(0, 4);
let secondStat = statement.substring(8, statement.length);
console.log(firstStat); //! for debug
console.log(secondStat); //! for debug
let result = firstStat + secondStat;

console.log(result);
/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
