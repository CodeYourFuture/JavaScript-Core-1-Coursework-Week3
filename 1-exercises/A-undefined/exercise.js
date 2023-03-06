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

// Answer: Declaring a variblewith 'let' but not assigning it a 
//value makes the varible have a default value of 'undefined'
//then the 'console.log' will print 'undefined'


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);

// Answer: The function 'sayHello()' does not retun anything,and when you assign the 
//result of 'sayHello()' to the variable 'hello','hello' will be undefined.


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();

//Answer: The function 'sayHelloToUser()' expects an argument 'user'
// to be passed when it is called but when it is called without any 
//argument ,'user' is 'undefined',this resulting in the string template to be 
//'Hello Undefined'.


// Example 4
let arr = [1,2,3];
console.log(arr[3]);

//Answer: arr[3] is undefined because the array arr only has elements indexed from 0 to 2, and there is no element at index 3.
