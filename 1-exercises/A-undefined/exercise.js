/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1: a is not assigned a value on the RHS.
let a;
console.log(a);


// Example 2: hello calls the sayHello() function, the sayHello() function assigns a string to a variable called "message" but does not return any data when called upon therefore consolelog() will return undefined as no value is returned from sayHello() function 
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);


// Example 3: sayHelloToUser() function is expecting an input called "user". as no input is specified when the function is called, undefined is assigned instead.
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();


// Example 4: items in arrays start from 0 instead of 1, as item 4 does not exist in the array, an undefined is returned instead.
let arr = [1,2,3];
console.log(arr[3]);
