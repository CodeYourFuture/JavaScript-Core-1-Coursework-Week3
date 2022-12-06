/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

function evenNumbers(n) {
    let count = [];
    let i = 0;
    while (count.length != n) {
        if (i % 2 === 0) {
            count.push(i);
        }
        i++;
    }
    if (count.length > 0)
        console.log(count.join());
    else
        console.log("nothing");

}

evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18
