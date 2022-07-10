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
console.log(a); // Variable a hasn't been assigned a value.


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello(); // Function sayHello is not returning anything, so hello variable is assigned to nothing, hence we get undefined.
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();// The function is missing argument, and is not defined what it will be returning.


// Example 4
let arr = [1,2,3];
console.log(arr[3]);// The index value is out of range, since the length of arr is 3 and the last element index is 2.
