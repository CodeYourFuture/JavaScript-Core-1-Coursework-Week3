/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a = 2; //value was not declare
console.log(a);

// Example 2
function sayHello() {
  let message = "Hello";
  return message; //we need return value to message
}

let hello = sayHello();
console.log(sayHello());

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser("MAX"); //input data was not provided -we should provide it

// Example 4
let arr = [1, 2, 3];
console.log(arr[2]); //mistake withbindex, last value from array is under 2 index
