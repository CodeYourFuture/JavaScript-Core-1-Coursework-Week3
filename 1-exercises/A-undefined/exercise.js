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
console.log(a);

//ANSWER the variable A had no value, if we tested on the terminal show "undefind" (no value in it)


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);

// ANSWER here the funtion is with a variable (sayHello). When we call the funtion this this should call the variable instead the message OR 
//we can also call the message but it should be iside "" STRINGS


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();

// Again USER is not defined with a VALUE and will only print the message in STRINGS "" (HELLO)



// Example 4
let arr = [1,2,3];
console.log(arr[3]);

// in JS it counts from 0. For this example if we want the last digit we call it number 2, 
//then it will show number 3.
