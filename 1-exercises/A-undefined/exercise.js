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
/*we saw undefine output because we declared variable and
 we didn't assign any value ,that's mean nothing to display.*/

// Example 2
function sayHello() {
    let message = "Hello";

}
let hello = sayHello();
console.log(hello);
/* we saw undefine output because function doesn't return or output anything*/

// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}
sayHelloToUser();
/* we saw undefine output because we didn't assign any value for the variable 'user'
that's mean the variable is empty*/


// Example 4
let arr = [1,2,3];
console.log(arr[3]);
/*we saw undefine we don't have index[3] in the array */