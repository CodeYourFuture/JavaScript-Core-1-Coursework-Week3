/*
    Sometimes when using loops, we'll want to execute the body of the loop at least once. We can make sure this happens by using a do-while loop.
        - If the condition in a while loop is initially false, the body of the loop will never execute
        - But in a do-while loop, because the condition is checked after the body, we know that it will always execute at least once
    
    Using a do-while loop, write a function which returns the sum of the first n even numbers (starting from 0)
*/

function evenNumbersSum(n) {
    let i = 0;
    let sum = 0;
    // for (let i = 0; i < n; i++) {
    //     sum += i;
    //     console.log(`this's number is: ${n}`);
    // }
    do {
        sum += i;
        i++;
        console.log(`this's number is: ${n}`);
    } while (i <= n);
    return sum;
}

console.log(evenNumbersSum(3)); // should output 6
console.log(evenNumbersSum(0)); // should output 0
// console.log(evenNumbersSum());
console.log(evenNumbersSum(10)); // should output 90

// evenNumbersSum(3);
// evenNumbersSum(10);