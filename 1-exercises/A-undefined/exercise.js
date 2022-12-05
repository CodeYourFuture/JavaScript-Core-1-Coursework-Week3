/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1  =  Variable a has not assigned any value.
let a;
console.log(a);


// Example 2 = Function sayHello()does not return any information or results.
function sayHello() {
    let message = "Hello";
   // return message + "  Hi JScript!";
} 
 let hello = sayHello();
  console.log(hello);


// Example 3 = When calling a function,function arg-t does not get a value.

function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}
sayHelloToUser();


// Example 4 = There is no element with index 3 in this array arr.
let arr = [1,2,3];
console.log(arr[3]);
