/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a = 1;
console.log(a);

// Example 2
function sayHello() {
  let message = "Hello";
  return message;
}
let hello = sayHello();
console.log(hello);

// function sayHello(name) {
//   console.log("Hello " + name);
// }
// sayHello("steve");

// Example 3
// https://learn.co/lessons/skills-based-js-intro-to-functions
function sayHelloToUser(user) {
  console.log(`Hello, ${user}`);
}
sayHelloToUser(`Jude`);

// Example 4
let arr = [1, 2, 3];
console.log(arr[2]);
