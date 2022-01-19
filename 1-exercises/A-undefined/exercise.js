/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a;           // a is not assigned any value
console.log(a);


// Example 2
function sayHello() {        // there is no return statement, and the message variable is defined inside the function so it is not read, 
    let message = "Hello";    // there are no parameters for the function
}

let hello = sayHello();    
console.log(hello);


// Example 3
function sayHelloToUser(user) {       // we don't pass any parameters into the function
    console.log(`Hello ${user}`);
}

sayHelloToUser();


// Example 4            // there is nothing in the array at index 3
let arr = [1,2,3];
console.log(arr[3]);
