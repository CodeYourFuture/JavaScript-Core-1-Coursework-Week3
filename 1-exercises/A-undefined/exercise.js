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
//answer: in line 13 we create variable by name a but haven't assign it for anything;

// Example 2
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);

//answer: we did not return anything in sayHello() function;

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();
//answer: we haven't gave an argument when we call sayHelloToUser() function;

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);

//answer: we don't have arr[3], array starts from 0 index and in our arr we have 0,1,2 index's only
