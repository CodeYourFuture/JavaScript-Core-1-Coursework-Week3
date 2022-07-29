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
// a hasn't been initialized, it has no value and that is way you see undefined


// Example 2
function sayHello() {
    let message = "Hello";
}
// there is no action, you've just initialized message but your function does nothing else 

let hello = sayHello();
console.log(hello);
// the function you're using to initialize hello does not return anything so hello is not initialized

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
// you haven't provided a value for the user variable so the console.log line is using a variable that is not initialized

// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// the index for the array goes from 0 to 2, there is no value at arr[3]