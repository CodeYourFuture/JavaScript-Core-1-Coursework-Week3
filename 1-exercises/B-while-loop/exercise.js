/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

function evenNumbers(n) {
    // TODO
    const doing = [];
    let i = 0;

    while(i < n){
    
        let num = n[i];
        if(num !== 0){
            
        }
    const j = doing.push(num);
        i++
    }

    return j;
}
const j =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

evenNumbers(j);

evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18
