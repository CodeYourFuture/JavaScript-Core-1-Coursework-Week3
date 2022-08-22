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
// console.log is returning undefined due to the "a" variable has not been assigned a value

// Example 2
function sayHello() {
    let message = "Hello";
}
// console.log is returning undefined as "hello" has been assigned to the function sayHello() which does not have a return value 
let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
//console.log is returning undefined as the parameter "user" has not been assigned a value

// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// console.log is returning undefined as in JavaScript, arrays are zero-indexed with the first element of an array being 0,
// the second element being 1 etc. In this example, there are three elements, however, the index ends at 2. Therefore, arr[3] returns
// undefined as the index ends at 2.