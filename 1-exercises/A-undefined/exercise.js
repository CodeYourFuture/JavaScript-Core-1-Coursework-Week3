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
// a has been declared by no value has been assigned.

// Example 2
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);
// function sayHello has been declared by no value returned from the function
// hello has been assigned the function sayHello which does not return anything
// There is nothing for console.log to output so response is undefined.

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();
// function sayHelloToUser is being called without an argument
// sayHelloToUser expects an argument so will output undefined in the logged response
// for variable 'user' after outputting 'Hello '

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);

// there are only 3 entries ranging from [0] to [2] in the array 'arr'
// arr [3] doesn't have a value (because it's the 4th array element) so will show undefined.
