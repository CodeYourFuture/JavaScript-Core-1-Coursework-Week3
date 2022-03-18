/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
    // Variable a has no value
let a;
console.log(a);


// Example 2
    // Function return anything.
function sayHello() {
    let message = "Hello";
}
    // It's trying to re assign the function sayHeloo to the variable hello but I didn't catch what is wrong.
let hello = sayHello();
console.log(hello);


// Example 3
    // Function is being called but with no arguments
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();


// Example 4
    // The index on console is wrong.
let arr = [1,2,3];
console.log(arr[3]);
