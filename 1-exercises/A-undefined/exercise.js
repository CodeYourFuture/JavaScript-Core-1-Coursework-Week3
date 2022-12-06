/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a; // because we didn't declare any value to a
console.log(a);


// Example 2// because function not returning any values
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) { 
    console.log(`Hello ${user}`);
}

sayHelloToUser();// we need to declare user inside that function /we called function but its parameter is not declared


// Example 4
let arr = [1,2,3];
console.log(arr[3]);// there is not third index in this array
