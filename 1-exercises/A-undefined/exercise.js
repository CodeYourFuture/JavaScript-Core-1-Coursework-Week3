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
//In this example, we see undefined because our variable doesn't have any value.

// Example 2
function sayHello() {
    let message = "Hello";
    // In this example, We don't have return, so I would write return in this line. =>  return message;
}


let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
//In this example,We do not have an argument because this is a function that has parameters, so outside the function it should have a value.
//I mean => sayHelloToUser(" we should write some string because od user")for example : sayHelloToUser("dear volunteer");

// Example 4
let arr = [1,2,3];
console.log(arr[3]);
 //We have an array with the indexes o, 1, and 2 here, so there isn't index 3. we can Write arr[0] or arr[1] or arr [2]