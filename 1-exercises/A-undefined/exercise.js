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
// a has not been assigned a value by the variable//

// Example 2
function sayHello() {
  let message = "Hello";
}
// 'message' is not the value assigned by the variable - sayHello is//

let hello = sayHello();
console.log(hello);
// superfluous brackets at the end of the variable//

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}
sayHelloToUser();
//no need to console log and call the function at the same time - strange use of brackets - as if they are calling a function inside the console log//

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);
// a return function would be more appropriate to call the array//
