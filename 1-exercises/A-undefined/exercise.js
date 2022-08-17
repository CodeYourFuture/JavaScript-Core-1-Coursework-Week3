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
console.log(a); //  a  does not = anything


// Example 2
function sayHello() {
    let message = "Hello"; // message not called ot returned
    //return message;
}

let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser(); // no user data added to function
//sayHelloToUser("dave");

// Example 4
let arr = [1,2,3];  //  index  0,1,2 no 3rd one
console.log(arr[3]); 
