/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a = "ahmed"; // in this example we shuold add value to the variable.
console.log(a);


// Example 2
function sayHello() {
    let message = "Hello";
    return message;           //in the examplewe need to write return to avoide the undefined.
}

let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser("Omer"); // for this example we miss to add value when we call the function.


// Example 4
let arr = [1,2,3];
console.log(arr[3]);// because the arr has 3 item and the firest item start with 0 and 1 and 2 but there is no for item.
