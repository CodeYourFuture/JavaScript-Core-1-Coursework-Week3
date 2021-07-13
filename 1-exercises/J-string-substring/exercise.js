/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";
const removeWords = "and dogs"
statement = statement.substring(0,(statement.length - removeWords.length));

console.log(statement);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
