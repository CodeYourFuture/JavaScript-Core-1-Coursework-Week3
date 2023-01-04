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
 // undefined - because variable not assigned

// Example 2
function sayHello() {
    let message = "Hello";
}
// undefined - because function not called


let hello = sayHello();
console.log(hello);

// undefined - because function not declared

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}


sayHelloToUser();

// undefined - because we put nothing like an argument 

// Example 4
let arr = [1,2,3];
console.log(arr[3]);

// undefind - becouse array isn't conclude element with index 3 



