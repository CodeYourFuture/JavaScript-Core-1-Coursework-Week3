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
console.log(a); // 'a' is declared and not yet assigned with a value. Accessing the variable evaluates to undefined.

// Example 2
function sayHello() {
  let message = "Hello"; // We are missing the return statement.
}

let hello = sayHello();
console.log(hello);

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`); // We have not assigned any value to 'user'.
}

sayHelloToUser();

// Example 4
let arr = [1, 2, 3]; // We are seeing undefined because there's no  array elements at index 3.
console.log(arr[3]);
