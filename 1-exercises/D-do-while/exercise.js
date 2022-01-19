/*
    Sometimes when using loops, we'll want to execute the body of the loop at least once. We can make sure this happens by using a do-while loop.
        - If the condition in a while loop is initially false, the body of the loop will never execute
        - But in a do-while loop, because the condition is checked after the body, we know that it will always execute at least once
    
    Using a do-while loop, write a function which returns the sum of the first n even numbers (starting from 0)
*/

function evenNumbersSum(n) {
  i = 0; // not to loop each time
  total = 0; //a varialbe to add from the point
  do {
    i++;
    total += i * 2; // adding the even number to total
    // console.log(i * 2); // test i and or n
  } while (i < n); // while i is not up to n
  return total - i * 2; // takes away the last even number (shifting the scales back to 0)
}

console.log(evenNumbersSum(3)); // should output 6
console.log(evenNumbersSum(0)); // should output 0
console.log(evenNumbersSum(10)); // should output 90
