/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

function evenNumbers(n) {
    // TODO
    let i = 0;
    let evens = [];
    while (evens.length < n) {
        evens.push(i);
        i += 2;
    }
    return evens;
}
console.log(evenNumbers(3))
console.log(evenNumbers(0))
console.log(evenNumbers(10))