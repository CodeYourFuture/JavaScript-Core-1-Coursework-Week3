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
console.log(a); //It is undefined because a is not assigned to any value.


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello); //It is undefined because the function isn't returning anything.


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser(); //It is undefined because there is no argument passed for the placeholder/parameter user.


// Example 4
let arr = [1, 2, 3];
console.log(arr[3]); //It is undefined because we only have index 0 to 2, index 3 does not exist.