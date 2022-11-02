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
// the reason why we are seeing undefined for a has no value assigned


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);
// the function is undefined because it has not returned anything



// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}
// the user parameter does not pass anything

sayHelloToUser();


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// there is no index 3 in the array the index goes up to 2

