/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";

//! for determind position for words 
console.log(statement.length);
console.log(statement.indexOf("ing"));
console.log(statement.charAt(17));

// main statement
statement = statement.substring(0, 18);

// log result
console.log(statement);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
