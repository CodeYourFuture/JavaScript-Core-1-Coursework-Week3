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
// there's no values assigned to the variable.


// Example 2
function sayHello() {
    let message = "Hello";
}
// there's no output.

let hello = sayHello();
console.log(hello);
// because the function sayhello does not return anything so this is not defined.

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
// no argument.

// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// there's no 4th(arr index 3) element in the arr. 