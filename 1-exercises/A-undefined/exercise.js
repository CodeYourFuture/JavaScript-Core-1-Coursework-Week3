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
console.log(a); // Variable a is declared but no value is assigned to it


// Example 2
function sayHello() {
    let message = "Hello";  // there is no return statemnet in the function sayHello(), the variable message only exists inside of the function,but nothing is returned
}

let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser(); // the parameter is not defined in the parenthesis so it returns undefined

// Example 4
let arr = [1,2,3];
console.log(arr[3]); // the index 3 in the array call points to the 4th placed element inside the array, as we count the elements from index 0, index 3 is undefined