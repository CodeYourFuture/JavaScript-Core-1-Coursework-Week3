/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
//a is declared however not given a value to the variable. Therefore becomes undefined. 
let a = 2; //now a has a value of 2
console.log(a);


// Example 2
// The function is not missing the return.
function sayHello() {
    let message = "Hello";
    return message //added the return keyword now the fuction works as it should.
}

let hello = sayHello();
console.log(hello);


// Example 3
//we need to pass argument when calling a function
function sayHelloToUser(user) {
    return(`Hello ${user}`);
     
}
sayHelloToUser(); 


// Example 4 
// not given a value.
let arr = [1,2,3,4]; // now index 3 has a value of 4
console.log(arr[3]);
