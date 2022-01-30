/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

function evenNumbers(n) {
  let i = 1;
  let str = "0";
  if (n === 0) {
    return;
  }
  while (i < n) {
    str += "," + i * 2;
    i++;
  }
  console.log(str);
}

evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18

// SOLUTION

// function evenNumbers(n) {
//     // initialising an array to hold our even numbers
//     let result = [];

//     let i = 0;
//     while(i < n) {
//         // adding the number to the array
//         result.push(i * 2);
//         i++;
//     }

//     // joining the elements of the array together as a string
//     // Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//     console.log(result.join());
// }

// evenNumbers(3); // should output 0,2,4
// evenNumbers(0); // should output nothing
// evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18
