/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/  
function evenNumbers(n) {
    let i = 0;
    let even =[];
    while (i < n) {
        if (i % 2 == 0) {
            // TODO
           even.push(i); 
        }
        i++;
    }
    return even;
}

let result=evenNumbers(5);
console.log(result); // should output 0,2,4
console.log(evenNumbers(0)); // should output nothing.
console.log(evenNumbers(20)); // should output 0,2,4,6,8,10,12,14,16,18
