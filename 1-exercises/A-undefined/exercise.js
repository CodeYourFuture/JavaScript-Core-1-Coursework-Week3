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
// Answer
// - a have not been assign a value but its being printed to the terminal. The computer dont khow what to do so it prints out the statement of undefined

// Example 2
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);
// Answer
// - functino is being called to siign a value to var hello but theres no return to return the value

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();
// Answer
// - the value user have no value assgined

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);
// Answer
// - the array a dont have vale at address 3. it only have 0 till 2 addresses.
