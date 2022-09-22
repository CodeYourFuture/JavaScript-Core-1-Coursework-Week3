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
// This is because no value is assigned to the variable "a". So attempting to print its value would print "undefined"

// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);
// The function "sayHello()" does not have any return value. Therefore, the value of the function when
// invoked would be "undefined", which is saved into hello.

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
// Here, we are only calling the function without entering the input to the function.

// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// There is no element in index 3 of the array "arr". Out of bound indexing of the array leads to undefined value.