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

// We are seeing "undefined" for a here because even though we declared an "a" variable before but no value has been assigned to "a". 


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);

// We are seeing "undefined" here because there is no return value from hello which is a function.


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();

// We are seeing "undefined" here because no argument is being passed into the function sayHelloToUser(user). 

// Example 4
let arr = [1,2,3];
console.log(arr[3]);

// We are seeing "undefined" here because there is no arr[3] in the array, the last item in the array is arr[2].

