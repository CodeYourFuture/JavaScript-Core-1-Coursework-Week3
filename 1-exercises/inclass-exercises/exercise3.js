// for loop exercise

/* Takes one number n as a parameter
Returns the sum of all numbers from 0 to n. 
For example, if n is 3, the function should return 0 + 1 + 2 + 3, which is 6.
You should use a for loop
Test the function by calling it with different values. Is it giving you the expected result?
*/

function sumN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
    sum += i;
    }
    return sum;
}

console.log(sumN(10));
