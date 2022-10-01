/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

// function evenNumbers(n) {
//     // TODO

//     while(n ){
//         console.log();
//     }
// }

//experiment

function evenNumbers(n) {
  // TODO
    let numArray = [0,1,2,3,4,5,6,7,8,9];
    let counter = 0;
    let stringVal = [];

    while (counter<n) {
        stringVal[counter] = numArray[counter] * 2;
        counter++;
        
    }
    
    console.log(stringVal);

}


evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18
