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
console.log(a); // There is not initialised with a value 


// Example 2
function sayHello() {
    let message = "Hello";
}    // there is not return and so default return is undefined

let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();   // there isnt any arguments for the function call and this user is undefined


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// there is not index 3 