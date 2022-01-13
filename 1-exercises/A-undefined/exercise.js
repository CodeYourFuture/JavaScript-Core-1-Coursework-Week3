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
//Because we didn't assign a value for a variable a when we first declaring it.

// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);
//Because the function is not returning anything.


// Example 3
function sayHelloToUser(user) {
   console.log(`Hello ${user}`); 
}

sayHelloToUser();
//we didn't pass argument to the function when we are calling it.


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
//Because we don't have index 3.
