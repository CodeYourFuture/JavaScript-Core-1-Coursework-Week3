/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

// // Problematic solution (the numbers do not go in one line and there is a comma (,) after the last number)
// function evenNumbers(n) {
//     // TODO
//     let i = 0;
//     while (i < n * 2) {
//         if (i % 2 === 0) {
//             console.log(i + ",");
//             i++;
//         } else {
//             i++;
//         }
//     }
// }



// function evenNumbers(n) {
//     // TODO
//     let i = 0;
//     let string = ""
//     while (i < n * 2) {
//         if (i % 2 === 0) {
//             string = string + i + ", ";
//             i++;
//         } else {
//             i++;
//         }

//     }
//     string = string.slice(0,-2)
//     // string = string.substring(0, string.length - 2) // Alternative but unnecessarily complicated
//     console.log(string);
// }
// OK. This solution is correct but there must be a smarter way to do this than having to use slice...

// // Solution with the use of an array
// function evenNumbers(n) {
//     // TODO
//     let i = 0;
//     let array = []
//     while (i < n * 2) {
//         if (i % 2 === 0) {
//             array.push(i);
//             i++;
//         } else {
//             i++;
//         }
//     }
//     console.log(array);
// }




// Completely unnecessary use of %; overcomplicated problem-solving
function evenNumbers(n) {
    // TODO
    let i = 0;
    let string = ""
    while (i < n) {
        string = string + (i * 2) + ", ";
        i++;
        }
    string = string.slice(0,-2)
    // string = string.substring(0, string.length - 2) // Alternative but unnecessarily complicated
    console.log(string);
}



evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18




