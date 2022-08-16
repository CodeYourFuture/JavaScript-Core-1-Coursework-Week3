/*
    Sometimes when using loops, we'll want to execute the body of the loop at least once. We can make sure this happens by using a do-while loop.
        - If the condition in a while loop is initially false, the body of the loop will never execute
        - But in a do-while loop, because the condition is checked after the body, we know that it will always execute at least once
    
    Using a do-while loop, write a function which returns the sum of the first n even numbers (starting from 0)
*/

function evenNumbersSum(n) {
let i = 0;
  const evenNum = [];
  do {
    if (i % 2 === 0) {
       evenNum.push(i);
    }
    i++
  } while (n > evenNum.length)

  let sum = evenNum.reduce((acc, curr) => acc + curr, 0);
  return sum;

}

console.log(evenNumbersSum(3)); // should output 6
console.log(evenNumbersSum(0)); // should output 0
console.log(evenNumbersSum(10)); // should output 90