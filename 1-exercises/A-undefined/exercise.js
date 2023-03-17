/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
//let a;  //.  a does not have value
let a = "Hi"
console.log(a);


// Example 2
function sayHello() {
    return "Hello";
}  ////. this function have to return to something. 

let result = sayHello();
console.log(result);  //// should assign a variable


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();  // hello is undefined and recalled with no parameter.
sayHello(Maria);   // should recall a value of a variable 


// Example 4
let arr = [1,2,3];
arr[3] = 4;

console.log(arr[3]);// the length of array is 2 because it starts from 0. 
//By adding arr[3] = 4; console.log(arr[3]) === true

