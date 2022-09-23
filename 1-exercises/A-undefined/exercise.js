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
// a has not a value that's why undefined.

// Example 2
function sayHello() {
    let message = "Hello";
}

// function has not a return part.

let hello = sayHello();
console.log(hello);
// There is nothing in the paranthesis of sayHello.

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
// function call has no argument

// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// There is not any element at the index(3). Array index ends at 2. 

//No questions