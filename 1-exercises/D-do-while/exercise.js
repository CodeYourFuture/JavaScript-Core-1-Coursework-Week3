/*
    Sometimes when using loops, we'll want to execute the body of the loop at least once. We can make sure this happens by using a do-while loop.
        - If the condition in a while loop is initially false, the body of the loop will never execute
        - But in a do-while loop, because the condition is checked after the body, we know that it will always execute at least once
    
    Using a do-while loop, write a function which returns the sum of the first n even numbers (starting from 0)
*/

let n = 0;
let number = 0;
let i = 0;
let x = i;
let y = i;

function evenNumbersSum(n) {
    const list = []; 
    do {
        number += 2;
        list.push(number * 2);
        n++;
        
           
    } while (number >= 18);
return list.reduce((x, y) => x + y, 0);
}


// function evenNumbers(n) {
//   const list = [];
//   while (number < n && n > 0) {
//     list.push(number * 2);
//     number++;
//   }
//   return list.join(",");
// }

console.log(evenNumbersSum(3)); // should output 6
console.log(evenNumbersSum(0)); // should output 0
console.log(evenNumbersSum(10)); // should output 90