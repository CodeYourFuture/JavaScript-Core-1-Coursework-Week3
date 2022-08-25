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
console.log(a); // a is not assigned any value. The RHS is empty

// Example 2
function sayHello() {
  let message = "Hello";
}

let hello = sayHello(); // hello is assigned the function sayHello() which does not return any value
console.log(hello);

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser(); //the parameter user is not assigned a value

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]); //the array stops at index2/[2]
