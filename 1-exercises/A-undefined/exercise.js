/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a=1;    // we dont have value for a
console.log(a);


// Example 2
function sayHello() { 
    let message = "Hello";
    return message;
}              //for this we should return message.          

let hello = sayHello();
console.log(hello);


// Example 3
let user="mamad";
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
 
}
        // here is we can give user value.
sayHelloToUser(user);


// Example 4
let arr = [1,2,3,4];
console.log(arr[3]);
 //in this example we dont have arr[3],because we just have [0],[1].[2]and we dont have it.
