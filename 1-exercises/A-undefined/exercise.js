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
console.log(a); //value is not asigned


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello); //sayHello() function does not have a return statement


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser(); //sayHelloToUser() function is not given a value when the function is called


// Example 4
let arr = [1,2,3];
console.log(arr[3]); //array contains only 3 elements and indices like 0,1,2 when we write arr[3] it means that we whant to reach the element number 4 which does not exist here.
