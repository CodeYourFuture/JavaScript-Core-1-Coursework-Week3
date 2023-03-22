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

// The output of the example code console.log(a); will be undefined.
// We see undefined because the variable a has been declared but not assigned any value. 
// In JavaScript, when a variable is declared but not assigned a value, its default value is undefined. 
// So, when we log the value of a to the console, you will see undefined printed.


// Example 2
function sayHello() {
    let message = "Hello";
}


let hello = sayHello();
console.log(hello);

// The output in the example contains undefined because the sayHello function does not return any value explicitly.
// When a function is called, it can return a value using the return keyword. 
// If the return keyword is not used in the function, the function will return undefined by default.
// In the example, the sayHello function prints "Hello" to the console but does not return any value. 
// When the sayHello function is assigned to the result variable, the result variable is assigned the value of undefined because that is the value that the sayHello function returns by default.
// When the result variable is printed to the console, it will display undefined because that is the value that was assigned to it when the sayHello function was called.


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();

// The output contains undefined because the sayHelloToUser() function expects an argument user, but when it's called without any argument like sayHelloToUser(), the user parameter is undefined. 
// The console.log() statement inside the function uses the user parameter to construct the message to be logged, so when user is undefined, the message will include undefined as the value of user.
// However, since the function doesn't have a return statement, its return value is undefined by default. 
// Therefore, when you call sayHelloToUser() without any argument, it logs the message "Hello undefined" to the console, but the return value of the function is undefined.
// So the complete output of this code would be:
// undefined
// Hello undefined
// The first line is the message logged by the console.log() statement inside the sayHelloToUser() function, and the second line is the return value of the sayHelloToUser() function, which is undefined.



// Example 4
let arr = [1,2,3];
console.log(arr[3]);

// The output in the example below contains undefined because letters is an array with three elements, indexed from 0 to 2. 
// When we try to access the element at index 3 (arr[3]), which is beyond the last index of the letters array, JavaScript returns undefined because there is no value at that index.

