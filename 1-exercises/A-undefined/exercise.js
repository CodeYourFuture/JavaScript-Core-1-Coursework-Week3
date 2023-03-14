/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1 
//we are declaring a variable "a" without initializing it. When we try to log the value of "a" to the console, we get undefined because we haven't assigned a value to it yet.
let a= 3
console.log(a);


// Example 2
//we have a function called "sayHello" which initializes a local variable called "message" and doesn't return anything. When we call "sayHello" and assign the result to the "hello" variable, the value of "hello" becomes undefined because the function doesn't return anything.
function sayHello() {
    let message = "Hello";
    return message
}

let hello = sayHello();
console.log(hello);


// Example 3
//we have a function called "sayHelloToUser" that expects a parameter called "user". When we call "sayHelloToUser" without passing any arguments, the "user" parameter is undefined, which causes the function to log "Hello undefined" to the console.
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser('baki');


// Example 4
// we have an array called "arr" with three elements. When we try to access the fourth element using the index 3, we get undefined because the array doesn't have a fourth element. In JavaScript, when you try to access an index that doesn't exist in an array, the value returned is undefined.
let arr = [1,2,3];
arr.push(4)
console.log(arr[3]);
