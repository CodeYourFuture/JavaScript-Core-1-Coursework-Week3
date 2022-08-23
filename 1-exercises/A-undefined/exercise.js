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

//A variable was declared but no value was assigned to it.

// Example 2
function sayHello() {
    let message = "Hello";
}
//when a function does not return anything

let hello = sayHello();
console.log(hello);
 
// executing a function that produces no output


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();

// A function that is declared with a parameter but receives no arguments

// Example 4
let arr = [1,2,3];
console.log(arr[3]);

// The index does not exist in the array.
