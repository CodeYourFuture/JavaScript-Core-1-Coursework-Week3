// /*
//     By now, you would have already seen "undefined", either in an error message or being output from your program.
//     But what does it mean? undefined represents the absence of a value.
    
//     In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
//     But usually, when you see undefined - it means something has gone wrong!

//     Below are 4 typical examples of when you would see undefined.
//     For each example, can you explain why we are seeing undefined?
// */

// // Example 1
// let a;
// console.log(a);
// //does not have assigned value//


// // Example 2
// function sayHello() {
//     let message = "Hello";
// }

// let hello = sayHello();
// console.log(hello);
// //a value was not returned//

// // Example 3
// function sayHelloToUser(user) {
//     console.log(`Hello ${user}`);
// }

// sayHelloToUser();
// //there is no any parameter when sayHelloToUser() is called//

// // Example 4
// let arr = [1,2,3];
// console.log(arr[3]);
// //there is no value in arr[3]//



// let i = 0;
// while (i < 3) {
//     console.log(i);
           // i++
// }

function sumTo(n) {
    let sum = 0;
    let i = 0;
 while(i <= n) {
    sum = sum + i;
    i = i + 1;
 }   
 return sum;
 
}
console.log(sumTo(3));


function showStocks(stocks){
    if(stocks.lengths === 0) {
        console.log("Empty Portfolio");
    } else {
    let i = 1;
while (i <= stocks.length) {
    console.log(stocks[i - 1]);
    i++;
}
}
}
let stocks = ["aapl","msft","amzn","googl", 
"tsla"]
showStocks(stocks);


for(let i = 0; i < 3; i++) {
    console.log(i);
}



function sumTo(n) {
    let sum = 0;
 for( let i = 0; i <= n; i = i + 1) {
    sum = sum + i;
   
 }   
 return sum;
 
}
function showStocks(stocks){
    if(stocks.lengths === 0) {
        console.log("Empty Portfolio");
    } else {
for(let i = 0; i < stocks.length; i++) {
    console.log(stocks[i]);
    
}
}
}
stocks = ["aapl","msft","amzn","googl", 
"tsla"]
showStocks(stocks);


let colours = ["red", "green", "blue"];

 for(let i = 0; i < colours.length; i++) {
    let colour = colours[i];
    console.log(colour);
 }


 let colors = ["red", "green", "blue"];
for(let color of colors) {
    console.log(color);
}

let phrase = "CodeYourFuture";
for(let letter of phrase) {
    console.log(letter);
}


function calculatechanges(prices) {
    let change = prices[prices.length - 1] - prices[0];
    return change.toFixed(2);
}
function changeInPrices(closingPrices){
    let changes = [];

   for(let pricesForOneStock of closingPrices) {
    let change = calculatechanges(pricesForOneStock);
   changes.push(change);
}
return changes;
}
    
const closingPricesLast5Days = [
  [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
  [340.69, 342.45, 334.69, 333.20, 327.29], // MSFT
  [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
  [2951.88, 2958.13, 2938.33, 2928.30, 2869.45], // GOOGL
  [1101.30, 1093.94, 1067.00, 1008.87, 938.53] // TSLA
];
let result = changeInPrices(closingPricesLast5Days);
console.log(result);


let fruits = ["orange", "apple", "banana"];
fruits.splice(1, 2, "pear");
console.log(fruits);  
console.log(fruits.length)


 let todo = ["order dog food", "do the dishes"];
 todo.splice(1, 1, 'take out garbage');

console.log(fruits);

console.log(["orange", "apple", "banana"].sort());


let array = [1, 2, 3];
let firstNewArr = array.concat(4, 5, 6);
let secondNewArr = array.concat([4, 5, 6]);
console.log(firstNewArr);
console.log(secondNewArr);
console.log(array);


let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 3));  
console.log(arr.slice(3));  
console.log(arr.slice(1, -1));  
console.log(arr);  

let arra = [1, 3, 5];
console.log(arra.includes(2));
console.log(arra.includes(3));

let arry = ["orange", "apple", "banana"];
console.log(arry.join());
console.log(arry.join(' - '));

let names = ['khadija', 'tom'];
console.log(names.join());

function namesInArray(names) {
    
}