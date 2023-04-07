/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a = "Hello";
console.log(a);
// ٰThe variable a is not assigned by any value.

// Example 2
function sayHello(msg) {
    let message = "Hello";
    return message;
}
let hello = sayHello("hi");
console.log(hello);
//function sayHello doesn't have any paramets and there is not argument when it calls !
//and Finction doesn't retun any value.
// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser("Sina");
// we should have argument

// Example 4
let arr = [1,2,3];
console.log(arr[2]);
// index of array start with 0 so here we have index 0,1 and 2.