/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1 => a is not defined 
let a;
console.log(a);


// Example 2 => we do not have a parameter
function sayHello() {
    let message = "Hello";
}

let hello = sayHello(); //sayHello function is not defined before calling it
console.log(hello);


// Example 3 => we have called the function without passing an argument 
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();


// Example 4 => we do not have an index 3
let arr = [1,2,3];
console.log(arr[3]);
