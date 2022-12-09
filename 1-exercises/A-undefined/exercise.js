
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
//Answer: variable "a" has not been assigned to a value and therefore not defined


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);
//Answer: a variable has been defined in the function but nothing is being returned from the function and it is therefore undefined.


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
//Answer: the function has been called without an argument for the user variable, therefore it returns "Hello, undefined".


// Example 4
let arr = [1,2,3];
console.log(arr[3]);

//Answer: there is no value in the array at position 3, as the count starts from