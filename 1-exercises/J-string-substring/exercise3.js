/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

const statement = "I do not like programming";

const indexOfNot = statement.indexOf('not');
const firsPart = statement.substring(0,indexOfNot);
const secondPart = statement.substring(indexOfNot+4);

const result = firsPart.concat(secondPart);

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
