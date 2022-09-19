/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1// because we want to log an empty variable
let a;
console.log(a);

// Example 2// because this function isn't returning anything
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);

// Example 3  // because no arguemnt pass through function call
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();

// Example 4 // arrays are 0-based and in this example there isn't four item
let arr = [1, 2, 3];
console.log(arr[3]);
