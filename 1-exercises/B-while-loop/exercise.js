/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

function evenNumbers(n) {
    let seqN = []; // creating and empty array
    let i = 0; // create a variable i and assigned 0
    let count = 0; // create a variable count and assigned 0

    while (count < n) { // created a while loop that specifies while argument is less than variable count, execute the loop
        seqN.push(i); // pushing i as an element to the array seqN
        i = i + 2; // we add 2 to variable i
        count = count + 1; // we add 1 to count, which now reflects the amount of times the loop has been executed, counting from 0
    }

    console.log(seqN.join()); // seqN array is being joined together as a string and then console logged
}

evenNumbers(3); // should output "0,2,4"
evenNumbers(0); // should output nothing
evenNumbers(10); // should output "0,2,4,6,8,10,12,14,16,18"