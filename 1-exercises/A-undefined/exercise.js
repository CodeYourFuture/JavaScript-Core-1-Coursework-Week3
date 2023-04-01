/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let = a;
console.log(a);

// In this example an operator "=" was absent

// Example 2
function sayHello() {
    let message = "Hello";
    return message;
}

let hello = sayHello();
console.log(hello);
// The mistake was inside function body, where return was absent that is why we've seen undefined


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();

// Inside function parameter braces should be parameter when the function is called 

// Example 4
let arr = [1,2,3];
console.log(arr[3]);

// When we call array elements via arr[] method we need to consider that index starts from 0 in arr, that's 
// we see undefined because we call 4th element