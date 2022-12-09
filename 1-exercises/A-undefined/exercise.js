/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a = ("bread");
console.log(a);
// Variable 'a' has not been assigned a value. I have assigned it 'bread'


// Example 2
function sayHello() {
    let message = "Hello";
    return message;
}

let hello = sayHello();
console.log('hello');
//We needed a return message inside function.


// Example 3
function sayHelloToUser(user) {
 return sayHelloToUser(); 
}

 console.log(`Hello ${'gayle'}`);
 //We need to tell the function what to return and also put the 'user' in parenthesis.


// Example 4
let arr = [1,2,3];
console.log(arr[2]);
//The index 3 is non-existent in our array so it returns undefined. I have changed it to index 2.
