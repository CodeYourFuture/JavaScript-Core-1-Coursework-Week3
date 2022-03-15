/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

function evenNumbers(n) {
  let i = 0;
  let m = "";
  let sum = 0;
  while (i < n) {
    m = m + sum + ","; //string
    sum = sum + 2;
    i++;
  }
  console.log(m);
  return sum;
}

evenNumbers(3); // should output 0,2,4
//evenNumbers(0); // should output nothing
//evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18
