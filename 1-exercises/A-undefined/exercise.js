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
// Variable a has not been initialised/assigned

// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);
// The function sayHello() doesn't return any value


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
// When the function is called (last line), no argument is given (for its user parameter)


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// Because of zero-indexing, arr[3] tries to find unsuccessfully the 4th element in the array arr (the array has only 3 elements)
