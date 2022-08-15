/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
// a is undefined because we didn't assign any value to it
let a;
console.log(a);

// Example 2
// The function does not return any output
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);

// Example 3
// We call the function without the input
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();

// Example 4
// There is no value on index 3
let arr = [1, 2, 3];
console.log(arr[3]);
