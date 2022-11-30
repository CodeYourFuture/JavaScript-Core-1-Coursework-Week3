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
//ANSWER: a has not been assigned a value so there is nothing to print out.

// Example 2
function sayHello() {
  let message = "Hello";
}
//ANSWER: there is no return value for the function

let hello = sayHello();
console.log(hello);
//ANSWER: there is no return value for the expression sayHello

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();

//ANSWER: no return value for the function even though function has been called

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);
//ANSWER: there is not element in the 3rd index of that array
