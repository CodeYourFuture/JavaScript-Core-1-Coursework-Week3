/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
//no value assigned to a
let a;
console.log(a);

// Example 2
//no return message in the function
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);

// Example 3
//when the function is invoked there's no argument assigned between brackets
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();

// Example 4
//indexing starts from 0 hence in this case from 0 to 2, there's no arr[3]
let arr = [1, 2, 3];
console.log(arr[3]);
