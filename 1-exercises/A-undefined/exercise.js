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
// In the above function we did not assign (a) value.

// Example 2
function sayHello() {
    let message = "Hello";
}
// In the above function dosenot return specify a value.

let hello = sayHello();
console.log(hello);
//The function sayHello() needs to be defined before it can be called.

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
// call the function on the last line with sayHelloToUser(), dose not passing in any argument.

// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// index [3] that is outside the range of the array
