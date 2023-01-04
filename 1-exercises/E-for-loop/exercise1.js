/*
    for loops can be useful when we already know exactly how many times we want to loop.

    Change the while loop below into a for loop.
*/


// Change the below code to use a for loop instead of a while loop.
// let i = 0;
// while(i < 26) {
//     console.log(String.fromCharCode(97 + i));
//     i++;
// }
// The output shouldn't change.


for(let i = 0; i < 26; i++){
    console.log(String.fromCharCode(97 + i))
    // return String.fromCharCode(97 + i)
}

/*String.fromCharCode()
The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode*/