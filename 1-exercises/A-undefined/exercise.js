/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a; // This variable is empty , you should asinged  this variable to eny value 
console.log(a);


// Example 2
function sayHello() {
    let message = "Hello";
}
// This Function did not return enything , that why it's undefined 

let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser(); // you should pass value to this function , now is empty 


// Example 4
let arr = [1,2,3];
console.log(arr[3]); // we did not have 4 item in this arry , the arry limte for 3 itme which is start from arry[0] to arry[2]
