/*
    Sometimes when using loops, we'll want to execute the body of the loop at least once. We can make sure this happens by using a do-while loop.
        - If the condition in a while loop is initially false, the body of the loop will never execute
        - But in a do-while loop, because the condition is checked after the body, we know that it will always execute at least once
    
    Using a do-while loop, write a function which returns the sum of the first n even numbers (starting from 0)
*/
//💫
// You need to re-read the question. You need the loop to add up the first n even numbers,
//  starting at 0. So if n=3, you need to add up 0+2+4. If n=10 you
// need to add up 0+2+4+6+8+10+12+14+16+18.
//💫

function evenNumbersSum(n) {
    let result = [0];
    // for (let i = 1; i < n; i++) {
    //     result[i] = i * 2 + result[i - 1];
    // }
    // let total = result[result.length - 1];
    // return total;

    let total;
    let i = 1;
    do {
        result[i] = i * 2 + result[i - 1];
        total = result[result.length - 1];
        i++;
    } while (i < n);
    return total;
}

console.log(evenNumbersSum(3)); // should output 6
console.log(evenNumbersSum(0)); // should output 0
console.log(evenNumbersSum(10)); // should output 90