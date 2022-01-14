/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1--> we haven't assigned a value to the variable a.
let a;
console.log(a);


// Example 2 --> The sayHello() function doesn't return a value.
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);


// Example 3 --> We haven't assign a value to the user argument.
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();


// Example 4--> This array has 3 elements,when wy try to conole.logo arr[3] we are looking for the 4-th element in the array witch doesn't exist.
let arr = [1,2,3];
console.log(arr[3]);
