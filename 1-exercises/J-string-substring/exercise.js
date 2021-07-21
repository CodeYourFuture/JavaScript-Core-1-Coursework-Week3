/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";
console.log(statement.length);
var keyword = " and dogs";
statement = statement.substring(0,(statement.length - keyword.length));

console.log(statement);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
