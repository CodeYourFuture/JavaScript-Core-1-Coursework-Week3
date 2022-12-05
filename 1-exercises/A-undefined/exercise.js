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

variable a is not assigned to a value

// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);

sayHello is a function that has not been defined nor does it have a return value or a parameter

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();


sayHelloToUser does not have a parameter therefore user has no value

// Example 4
let arr = [1,2,3];
console.log(arr[3]);

console.log is calling index 3 however there are only 2 as the index starts at 0
