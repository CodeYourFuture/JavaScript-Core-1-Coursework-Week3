/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// a does'nt have any value. 
let a;
console.log(a);


// The function sayHello doesn't return anything.
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);


// The function is recalled with no parameter.
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();


// The array has no 4th element (index is counted from 0). 
let arr = [1,2,3];
console.log(arr[3]);
