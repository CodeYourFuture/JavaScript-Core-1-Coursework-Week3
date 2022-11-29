/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a;            // The variable a has no value.
console.log(a); 


// Example 2
function sayHello() {
    let message = "Hello"; // We need to replace (let message =) by => console.log("Hello World");
}
// We need to call the function => sayHello();

let hello = sayHello();    // Here we need to assign a value to the variable hello not a function.
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();           // We need to give an argument to the function in line 32.


// Example 4
let arr = [1,2,3];
console.log(arr[3]);         // When we run this code the output is undefined because we call the third index but we have only 3 number in the array.