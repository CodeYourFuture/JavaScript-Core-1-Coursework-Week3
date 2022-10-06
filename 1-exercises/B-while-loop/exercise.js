/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

function evenNumbers(n) {
  let str = "";
  let x = 0;
  while (x < n * 2) {
    str += x + ",";
    x += 2;
  }
  newStr = str.slice(0, -1);
  console.log(newStr);
}
//Note for reviewers: I can have written the code shorter but I wanted to write all of the numbers for each output on the same line.
// And I wanted to delete the last comma.

evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18
