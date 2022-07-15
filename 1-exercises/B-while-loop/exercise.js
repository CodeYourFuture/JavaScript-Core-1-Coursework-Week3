/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

function evenNumbers(n) {
    // TODO
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let j = nums.slice(0, n);

let i = 0;

while( i < j.length){

    console.log(j[i] * 2);
    i ++;
}

return j;

}



evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18
