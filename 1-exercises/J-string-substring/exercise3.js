/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let wordToRemove = "not"; 
let lengthRemove = wordToRemove.length ;

let indexWord = statement.indexOf(wordToRemove); //5
let secondString = statement.substring(0, (indexWord -1)) //(0, (5))
let thirdString = statement.substring((indexWord + lengthRemove),(statement.length))

//console.log(indexWord);
//console.log(secondString);
//console.log(thirdString);

let result = secondString.concat(thirdString);
console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
