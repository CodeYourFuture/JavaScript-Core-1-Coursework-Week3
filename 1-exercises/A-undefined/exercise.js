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
// a is declared as a variable. But no value has been assigned. 


// Example 2
function sayHello() {
    let message = "Hello";
}
// sayHello function created. But it has no parameter in it.

let hello = sayHello();
console.log(hello);
// hello variable has a value which is sayHello function. But this function has no parameter in it. 

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
// user declared as a parameter. But when calling a function, an argument is needed not to get undefined result.


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// The index is starting from 0 in array. That`s why the last index of array "arr" is [2]. 
// So there is no value for arr[3]. So, arr[3] will be undefined. 
