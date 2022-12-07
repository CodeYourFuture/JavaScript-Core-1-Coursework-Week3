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
// Because that wasn't describe a variable */

// Example 2

let sayHello = "Hello";

console.log(sayHello);
//we don't need function in that case and the let hello = sayHello was also extra

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
// we need to give a value to our function */

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);
//we need for element because our console.log(arr[3]) want's print the 4th element and arrays starting from 0 so now we have just2 index*/