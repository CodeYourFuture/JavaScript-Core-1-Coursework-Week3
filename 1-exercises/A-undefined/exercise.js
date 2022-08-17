/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a;
console.log(a);


// Example 2
function sayHello() {
    let message = "Hello";
}

// In the above example we wish to use the name that the user provides to greet them

let hello = sayHello();
console.log(hello);

// in the above example we need the users name to to log the function


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
//  the user needs to input username for the greeting Hello user to be printed

// Example 4
let arr = [1,2,3];
console.log(arr[3]);

// arr 3 is undefined as the array only currently goes to 2. Once the array another value is added to the array it will be printed in the terminal