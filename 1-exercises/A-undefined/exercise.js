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
// This is because console. log() does not return a value (i.e. returns undefined). The result of whatever you entered to the console is first printed to the console, then a bit later the message from console. log reaches the console and is printed as well.

// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);
// The sayHello() function that you have defined doesn't explicitly return a value (instead it just makes a call to write out to the console).

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
// There is no identifier. 'user' parameter doesn't match 'sayHelloToUser'! 

// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// There is no third item. Arrays always count 0 and I can see this array has just 2 items. 