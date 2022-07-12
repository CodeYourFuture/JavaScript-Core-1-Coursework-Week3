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
console.log(a); // A: We haven't initialised the variable with a value.


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello); // A: We aren't returning anything from the function body and thus the default return is undefined.



// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`); // A: We aren't providing any arguments for the function call and thus user is undefined.
}

sayHelloToUser();


// Example 4
let arr = [1,2,3];
console.log(arr[3]); //  A: arr[3] is the 4th item of the array which hasn't been assigned a value or the index 3 and thus it's undefined.
