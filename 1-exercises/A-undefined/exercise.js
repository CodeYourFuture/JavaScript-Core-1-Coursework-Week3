/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1 (answer)  a is undefined because nothing has been assigned to it 
let a;
console.log(a);


// Example 2 (answer) the variable has not been returned in the function.
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser(); 
// (answer) there is no string when calling this function on line 32.


// Example 4 (answer) there is not a third number in the array the array only has 0, 1, 2 in it.
let arr = [1,2,3];
console.log(arr[3]);
