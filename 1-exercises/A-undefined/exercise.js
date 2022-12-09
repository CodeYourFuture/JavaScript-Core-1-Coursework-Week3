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
// we have not assigned a value to 'a' e.g let a = "something"


// Example 2
function sayHello() {
    let message = "Hello";

}

let hello = sayHello();
console.log(hello);
// we needed a 'return message' inside the function

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();

// you haven't given the function a parameter e.g "khadija"


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// the index 3 does not exist in the given array but if we added an extra number e.g 4, it would no longer be undefined. 
