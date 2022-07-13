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
console.log(a); // A VARIABLE HAS BEEN DEFINED BUT NOT ASSIGNED A VALUE, THEREFORE IT WILL RETURN AN UNDEFINED VALUE WHEN ACCESSING THE VARIABLE.

// Example 2
function sayHello() {
  let message = "Hello"; // A FUNCTION WITH THAT DOES NOT HAVE A RETURN WILL COME BACK AS UNDEFINED.
}

let hello = sayHello(); // sayHello IN THIS CASE IS NOT A COMPLETED FUNCTION SO WILL DO NOTHING WHEN CALLED UPON.
console.log(hello); // THE OUTPUT OF WHICH, GIVES AN UNDEFINED MESSAGE.

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`); // THE PARAMETER REQUIRES AN ARGUMENT WHEN THE FUNCTION IS CALLED. ARGUMENT IN THIS CASE IS BLANK SO THE OUTPUT IS UNDEFINED.
}

sayHelloToUser();

// Example 4
let arr = [1, 2, 3]; // THIS ARRAY CONSISTS OF ONLY 3 NUMBERS WITH AN INDEX THAT STARTS AT ZERO, SO THE HIGHEST NUMBER IS 2
console.log(arr[3]); // AND THE USER IS TRYING TO ACCESS A FOURTH NUMBER WHICH WOULD HAVE HAD AN INDEX NUMBER OF 3 WERE IT
