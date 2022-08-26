/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

let evenNumbers = 0;
while (evenNumbers < 18) {
console.log(evenNumbers);
evenNumbers = evenNumbers + 2;
}

//GR - it's both telling me I've got part of it right and that evenNumbers is not a function - how can both be true?//

evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18
