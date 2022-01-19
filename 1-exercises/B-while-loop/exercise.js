/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

// this is a block
function evenNumbers(n) {
  // while loop is checking for the condition then exicuting the while loop the condition if present
  // Initialise, check the condition, the first n even number 0, 2,4,6, run n even number of time,incremete,
  num = 0; // starting point o for the count up to n
  str = ""; // representing the characters
  while (n != num) {
    //while I have not reach the number I am counting up to (n) form zero
    num++; // num is counting up to n
    str += ((num - 1) * 2).toString() + ","; // num holds the number of even numbers with a start point of 0
  }
  console.log(str.substring(0, str.length - 1)); // remove last charater of a string string
}

//output this
evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18

/*
1,2,3,4  // 1st, 2nd ,3rd even number so on
2,4,6,8  // actual number


0,1,2,3 
0,2,4,6 // Even number scale shifted by one

*/
