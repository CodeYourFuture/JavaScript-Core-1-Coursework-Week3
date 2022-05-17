/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

/* This was my solution - needed to replace with the following solution from CYF
function evenNumbers(n) {
    let i = 0
    while(i<n *2){
    let x = i.toString().split(/\,/g)
    let y = x.concat(x).flat
    console.log(`${x}`);
    i+=2 
    } //  I need to pring out like following example 
} */

// CYF solution
function evenNumbers(n){
    let arr = []
    let i =0;
    while(i<n){
        arr.push(i * 2)
        i++
    }
    console.log(arr.join())
}
evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18

