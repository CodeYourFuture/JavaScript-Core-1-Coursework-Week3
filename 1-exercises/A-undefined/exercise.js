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
/*Answer
The code in example 1 will output undefined beasue a value has not been assigned to variable a,
So, when the program exacutes the code in line 14 will not get any output value.
*/

// Example 2
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);

/*
The sayHello() function in example 2, is not return any value, therefore the program will print out undefined.
*/

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();

/* Answer for example 3
The funciton is called with not value, to replace the 'user' parameter
*/

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);
/*
Index 3 is not defined means there is no value in index 3. Therefore, the program will output undefined message.
*/
