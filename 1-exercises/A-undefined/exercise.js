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

//  In this case "a" variable was just created and no values were assigned to it


// Example 2
function sayHello() {
    let message = "Hello";
    console.log(message);
}

let hello = sayHello();
console.log(hello);

// The first line is the result of calling sayHello, which logs "Hello" to the console.  The second line is the value of hello variable, which is undefined. This is because the sayHello function does not return a value, so when it is called and assigned to the hello variable, the value of hello is undefined.


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();

// This function prints "Hello undefined" in the console because function sayHelloToUser accepts parameter called "user". However, this function was invoked without any parameter, and this is why we get such result in the console.

// Example 4
let arr = [1,2,3];
console.log(arr[3]);

// Array "arr" contains three values, but when we trying to console.log arr[3], we actually asking to console element number 4, which doesn't exists in this case.