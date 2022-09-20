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
console.log 
// Answer 1:Becuase no value was given to console.log

// Example 2
function sayHello() {
    let message = "Hello";
}
let hello = sayHello();
console.log(hello);
// Answer: for the reason the functin sayHello does not return any value.
//  and when call it , we recieve undifined.

// Example 3
function sayHelloToUser(user) {
   console.log(`Hello ${user}`); 
}
sayHelloToUser();
//Answer: becuase the first argumant does not assign a value.( in line 30)


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
//Answer: there is no index 3 in the array (in line 35)