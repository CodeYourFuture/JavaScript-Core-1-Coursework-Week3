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
console.log(a); // a has been declared but not initialized, as it does not have a value, it returns undefined.


// Example 2
function sayHello() {
    let message = "Hello";
} 

let hello = sayHello();
console.log(hello);
// the function does not return anything


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
//when the function is called, there is no value given for the user argument, this results in the user variable being undefined


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
//arrays are zero indexed so the highest given index in this is 2 so there is no value in arr[3]
