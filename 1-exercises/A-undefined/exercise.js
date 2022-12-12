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
console.log(a);  // There's no value assigned to variable  a


// Example 2
function sayHello() {
    let message = "Hello"; // There's no output from this function.
}

let hello = sayHello();
console.log(hello);   //log 'hello', but due to sayHello()function  is undefined, so it's logged undefined as well.


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();  // There's no argument assigned when call sayHelloToUser()function.


// Example 4
let arr = [1,2,3];
console.log(arr[3]);  // There's no 4th element in array, so it logs 'undefined'.
