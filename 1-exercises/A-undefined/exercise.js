/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
// 'a' is not assigned to anything, so it treats as an undefined data.
let a;
console.log(a);


// Example 2
// 'message' is not defined before it is used.
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);


// Example 3
// There is no data in sayHelloToUser to place as user.
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();


// Example 4
// The array arr has 3 indexes which are [0], [1] and [2]. So there is no index 3.
let arr = [1,2,3];
console.log(arr[3]);
