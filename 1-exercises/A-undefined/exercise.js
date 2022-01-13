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
// We declare the variable 'a' but we haven't assigned a value to it yet.


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);

// We are not returning anything from the function body and so the default return is undefined.


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();

// We are not providing any arguments for the function call and so the user is undefined.


// Example 4
let arr = [1,2,3];
console.log(arr[3]); 

// arr[3] is the 4th item of the array which has not been assigned a value and so it's undefined.
