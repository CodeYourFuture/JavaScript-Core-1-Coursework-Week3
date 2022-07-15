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
// Because there is no value is assigned to the variable a, 

// Example 2
function sayHello() {
    let message = "Hello";
}


let hello = sayHello();
console.log(hello);
// Since the function sayHello is missing the return statement invoking will it result in undefined


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();

// Since the function sayHelloToUser was defined with a parameter, however, invoking it will require an argument, and invoking it without an argument will result in undefined


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
// This operation will result in undefined because there is no index[3] in the array
