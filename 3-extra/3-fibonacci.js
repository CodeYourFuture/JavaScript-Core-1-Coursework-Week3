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
    // TODO
}

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