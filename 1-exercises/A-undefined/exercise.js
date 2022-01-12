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
// we are getting undefined because we have not defined it it with anything.

// Example 2
function sayHello() {
  let message = "Hello";
}
// the fuction doesnt have a specific purpose so therefore we need to let the fuction know what we want it to return.

let hello = sayHello();
console.log(hello);

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();
// this is because we are not passing a value to our parameter.

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);

// we dont have the third index.
