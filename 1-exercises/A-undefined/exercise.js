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
console.log(a); //'a' hasn't been assigned a value


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);  //function doesn't return anything


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();  //no argument given when calling the function.

// Example 4
let arr = [1,2,3];
console.log(arr[3]);  //The arrays start at 0, there is no array item at the 3rd index.
