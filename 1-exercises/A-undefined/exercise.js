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
//here by console.log we can print a's value. (a) has declared but has not initialized so it will return undefined.
console.log(a);

// Example 2
function sayHello() {
	let message = 'Hello';
} //because this function doesn't return message so it shows undefined.

let hello = sayHello();
console.log(hello); // this will print a variable  which is hold the value of sayHello funcation call but cuz the
//function doesn't return message , so it again shows undefined. but if the function fix and return message

// Example 3
function sayHelloToUser(user) {
	console.log(`Hello ${user}`);
}

sayHelloToUser(); // in this example sayHelloToUser function has a parameter so because an argument doesn't pass to function call it will show "Hello undefined".

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]); //this array has 3 element and include : 0 1 2 indexes so index 3 doesnt exist in this array
//and will show undefined
