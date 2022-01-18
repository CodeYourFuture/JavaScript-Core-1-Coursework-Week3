/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

// function evenNumbers(n) {
//     // TODO
//     let start = 0;
//     let result = []; 
//     if (n < 10) {
//         while (start < n) {
//             result.push(start);
//             start+=2;
//         } 
//     } else if (n >= 10){
       
//             while (start < n * 2) {
//                 result.push(start);
//                 start+=2;
//             } 
       
//     }
    
//     console.log(result);
//     return result;
//}

function evenNumbers(n) {
    // TODO
    let start = 0;
    let result = [];

    while (result.length < n) {
        result.push(start);
        start+=2;
    }

    return console.log(result);
}

evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18
