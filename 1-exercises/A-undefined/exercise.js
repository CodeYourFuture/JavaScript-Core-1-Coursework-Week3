/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a; // There is nothing equal with variable "a"
console.log(a);


// Example 2
function sayHello() {
    let message = "Hello";//  This function does not return anything, so definition is not enough.
}

let hello = sayHello();
console.log(hello);// Variable defined but function must be defined too.


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser(); // There must be a value inside of the paranthesis to make our function defined.


// Example 4
let arr = [1,2,3];
console.log(arr[3]); // The index has been given is not existing or NOT DEFINED in the variable
