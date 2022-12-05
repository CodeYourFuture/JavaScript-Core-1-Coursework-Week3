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
//We are seeing undefined because is was not given a value.


// Example 2
function sayHello() {
    let message = "Hello";
}


let hello = sayHello();
console.log(hello);
//The say hello function was not asked to return a value it is a statement. Hence passing the sayHello() to the variable hello will output undefined.


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();
//The variable user was declared or defined but it was not given a value therefore only the string 'Hello' was outputted and undefined was displayed instead of a value for user.

// Example 4
let arr = [1,2,3];
console.log(arr[3]);
//The arr variable runs from index 0 to index 2, making arr[0], arr[1] and arr[2] equal 1,2 and 3 respectively, so it does not have an index 3 which is why we would get undefined if we try to print arr[3]
