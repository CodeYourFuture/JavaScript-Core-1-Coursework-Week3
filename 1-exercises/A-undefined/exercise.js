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
console.log(a);  //it will be undefined because it does not have any value


// Example 2
function sayHello() {
    let message = "Hello"; //hello is not a string in console.log, so the program reads it as variable, but "hello" doesn't exist.
}

let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();  //when calling function we don't pass any value for parameter user



// Example 4
let arr = [1,2,3];
console.log(arr[3]); //element in arr with index 3 doesn't exist. There only 0, 1, 2.
