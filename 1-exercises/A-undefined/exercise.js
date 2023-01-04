/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/


//the variable did not contain any value. for this reason will be undefined
//Example 1
let a;
console.log(a);  


//this fuction did not have return, so when it's called will be undefined
// Example 2
function sayHello(a) {
    let message = "Hello2";
}

let hello = sayHello();
console.log(hello);


// this will return hello and then undefined because we did not declare of the variable user.
// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);  
}

sayHelloToUser();



//this array contain 3 items but the index start from 0 and will display until index[2]=3
// Example 4
let arr = [1,2,3];
console.log(arr[3]);

