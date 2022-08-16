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
// We have declared a but We didn't assign any value to a.

// Example 2
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);
// function don't return any value. So when we assign the function to variable , hello , the value for
// variable is undefined

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();
// function needs a parameter called user, but when calling the function we didn't give a parameter to function,
// so the console.log returns undefined

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);
// There's no item in the index 3, so it's undefined
