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
    let result = [0, 1];
    for (let i = 2; i < n; i++){
        let totalOfPrevious = result[i - 1] + result[i - 2]
        result.push(totalOfPrevious)
    }
    return result
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


/* 
Q: i am trying to test some js files. i have to different folder and files inside them
first folders name is mandatory and the second one is extra
when i run "npm test -- --testPathPattern mandatory/"  it works 
but when i try "npm test -- --testPathPattern extra/" it doesnt work
then i tried "npm run extra-tests" and it worked as well.
but i still didnt understand the difference between "npm test -- --testPathPattern extra/" and "npm run extra-tests". can you explain pls 

A: The npm test command is a built-in command in npm that runs the test script defined in the package.json file. By default, the test script runs the test files in the test/ directory. When you pass the --testPathPattern option with the folder name, it runs the tests only in that folder.

So, when you run npm test -- --testPathPattern mandatory/, it runs the tests only in the mandatory/ folder.

However, when you run npm test -- --testPathPattern extra/, it doesn't work because there might not be any tests in the extra/ folder, or there may be some configuration issues in your project. In this case, you need to create a custom script in the package.json file and define it to run the tests in the extra/ folder.

For example, you can define a custom script called extra-tests in your package.json file that runs the tests in the extra/ folder. This can be done by adding the following line to the "scripts" section of the package.json file:

json
Copy code
"extra-tests": "jest extra/"
Now, when you run npm run extra-tests, it runs the Jest command with the extra/ folder as the testPathPattern.

To summarize, npm test -- --testPathPattern extra/ didn't work because there might not be any tests in the extra/ folder, or there may be some configuration issues. Whereas, npm run extra-tests worked because it is a custom script defined in package.json that specifically runs tests in the extra/ folder using the Jest command.

From @Berkeli: Hi Saim, you are running npm test which is only looking inside mandatory folder
if you run npm run extra-tests -- --testPathPattern 3-fibonacci.js should do the trick
or just npm run extra-tests  for all extra tests
*/