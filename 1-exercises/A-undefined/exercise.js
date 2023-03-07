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

// the variable a hasn't been initialised i.e. it's not been assigned an initial value


// Example 2
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);

// the function won't return anything, so the variable hello will return undefined.

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();

// the function needs an argument called user to be passed through it.
// in line 34, there are no arguments being passed through the function so it will return undefined.

// Example 4
let arr = [1,2,3];
console.log(arr[3]);

// so the array begins at index 0 and ends at index 2.
// there is no value assigned at index 3 so it'll return undefined.
