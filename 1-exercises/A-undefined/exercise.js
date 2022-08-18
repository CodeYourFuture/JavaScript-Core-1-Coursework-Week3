/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1 - A variable a doesn't have value assigned 
let a;
console.log(a);


// Example 2 - This function doesn't have return
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`); // The parameters needs to have arguments. If a function is called with missing arguments, the missing values are set to undefined.
}

sayHelloToUser();


// Example 4
let arr = [1,2,3]; // In this array there are only 3 numbers with index started 0. So the last number has index 2
console.log(arr[3]); //  Index 3 requires fourth number of the array, but there are only 3 numbers
