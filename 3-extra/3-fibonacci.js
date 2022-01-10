/*
    The Fibonacci Sequence is a famous sequence of numbers. Read more here: https://www.mathsisfun.com/numbers/fibonacci-sequence.html
    
    The sequence starts with 0 and 1. Each number after that, is the sum of the previous 2 numbers in the sequence.
    So the third number in the sequence is 1, because 0 + 1 = 1. 
        Now we have 0, 1, 1.
    The fourth number in the sequence is 2, because 1 + 1 = 2. (the last 2 numbers in the sequence were 1 and 1)
        Now we have 0, 1, 1, 2.
    The fifth number in the sequence is 3, because 1 + 2 = 3. (the last 2 numbers in the sequence were 1 and 2)
    And so on... If we go a bit further the sequence looks like 0, 1, 1, 2, 3, 5, 8, 13,....

    Can you implement a function that will generate the first n numbers in this sequence (starting with 0 and 1)?
        - the input n will be passed in to the function as an argument, and will be a number greater than 2
*/

function generateFibonacciSequence(n) {
    /*
      Strictly speaking F0=0 F1=1 F2=1 F3=2 F4=3 F5=5 F6=8 etc
      So my program will produce a sequence based on these numbers

      see https://en.wikipedia.org/wiki/Fibonacci_number
      see also 
      The first 300 Fibonacci numbers, factored
      http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibtable.html
    */

    let previous = 1, addend = 1, total = 1, result = [0,1,1]

    if (n <= 1) 
        return [0];
    if (n === 2)
        return [0,1]; 
    if (n === 3)
        return [0,1,1]; 

    // n is >= 4 
    // so will be generating from F(3)=2
    // So for example, to generate F(7)=13 which is the 8th Fibonacci number
    // for the purpose of my program, n will be decremented by 3 = 4
    // to run the following loop, 4 times:
    for (let i = 0; i < n - 3; i++)
    {
        previous = total;
        total += addend;
        addend = previous
        result.push(total);

    }

    return result;
}

console.log(generateFibonacciSequence(0))
console.log(generateFibonacciSequence(1))
console.log(generateFibonacciSequence(2))
console.log(generateFibonacciSequence(3))
console.log(generateFibonacciSequence(4))
console.log(generateFibonacciSequence(7))
console.log(generateFibonacciSequence(10))
/* ======= TESTS - DO NOT MODIFY ===== */
test("should return the first 10 numbers in the Fibonacci Sequence", () => {
    expect(generateFibonacciSequence(10)).toEqual(
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    );
});

test("should return the first 5 numbers in the Fibonacci Sequence", () => {
    expect(generateFibonacciSequence(5)).toEqual(
        [0, 1, 1, 2, 3]
    );
});

test("should return the first 15 numbers in the Fibonacci Sequence", () => {
    expect(generateFibonacciSequence(15)).toEqual(
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
    );
});