/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

let n = 0;
let number = 0;

function evenNumbers(n) {
    const list = [];
    while (number < n && n> 0) {
        list.push(number * 2);          
            number++;
        }
        return list.join(",");
    }
    console.log(evenNumbers(3));
    console.log(evenNumbers(0));
    console.log(evenNumbers(10));
    
    
evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18



