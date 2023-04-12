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
console.log(a); //we didn't assign a value to the variable a 


// Example 2
function sayHello() {
    let message = "Hello"; // the function sayHello() doesn't return anything
}

let hello = sayHello(); 
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();  // we didn't insert any input in the function sayHelloToUser()


// Example 4
let arr = [1,2,3];
console.log(arr[3]);  // the array arr is containing 3 elements with idexes 0,1,2. The index 3 is not avaiable in the array arr

