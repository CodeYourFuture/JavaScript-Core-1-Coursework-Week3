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
// a should have a value for not to be undefined.a doesn't have a value.

// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);
// sayHello function is not returning a value therefore variable hello has no value.This is why console.log returns undefined.


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
// In line 32 function call doesn't have any parameter.Therefore it returns undefined.


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// Array doesn't have an item in index 3 so console.log returns undefined.
