// console.log("Exercise 1");

// function sumTo(n) {
//   let sum = 0;

//   let i = 0;

//   while (i <= n) {
//     sum = sum + i;
//     i++; // i = i + 1;
//   }
//   return sum;
// }

// console.log(sumTo(3));

// console.log("Exercise 2");

// function showStocks(stocks) {
//   if(stocks.length === 0) {
//     console.log("Empty Portfolio");
//   } else {
//     let i = 0;
//     while(i <= stocks.length) {
//       console.log(stocks[i]);
//       i++;
//     }
//   }
//   //   let i = 0;
//   //   console.log(stocks.length);
//   //   while (stocks.length > i) {
//   //     i++;
//   //     console.log|(i)
//   //     console.log(stocks[i].charAt(0));
//   //   }
// }
// let stocks = ["aapl", "msft", "amzn", "googl", "tsla"];
// showStocks(stocks);

// console.log("Exercise 3");

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(sumTo(3));

// console.log("Exercise 4");
// function showStocks(stocks) {
//   if (stocks.length === 0) {
//     console.log("Empty Portfolio");
//   }
//   for (let i = 0; i < stocks.length; i++) {
//     console.log(stocks[i]);
//   }
// }

// let stocks = ["aapl", "msft", "amzn", "googl", "tsla"];
// showStocks(stocks);

// console.log("Exercise 5 - for/of loops (cont.)");

// // let colours = ["red", "green", "blue"];

// // for (let colour of colours) {
// //   console.log(colour);
// // }

// function showStocks(stocks) {
//   if (stocks.length === 0) {
//     console.log("Empty Portfolio");
//   }
//   for (let stock of stocks) {
//     console.log(stock);
//   }
// }

// let stocks = ["aapl", "msft", "amzn", "googl", "tsla"];
// showStocks(stocks);

// console.log("Exercise 6");

// const closingPricesLast5Days = [
//   [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
//   [340.69, 342.45, 334.69, 333.2, 327.29], // MSFT
//   [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
//   [2951.88, 2958.13, 2938.33, 2928.3, 2869.45], // GOOGL
//   [1101.3, 1093.94, 1067.0, 1008.87, 938.53], // TSLA
// ];

// function calculateChange(prices) {
//   let lastIndex = prices.length - 1;
//   let difference = prices[lastIndex] - prices[0];
//   return Math.round(difference * 100) / 100;
// }

// // console.log(calculateChange(closingPricesLast5Days[0]));

// function changeInPrices(closingPrices) {
//   let changes = []; // [1, 2 , 3]

//   for (let pricesForOneStock of closingPrices) {
//     let change = calculateChange(pricesForOneStock);
//     changes.push(change);
//   }

//   return changes;
// }

// console.log(changeInPrices(closingPricesLast5Days));

// console.log("Exercise 8");

// // Imagine you have a ToDo list which you are planning to do in order. Use
// // the methods we’ve looked at to manipulate the list.
// // let todo = ["order dog food", "do the dishes"];
// // ● Add a new item - "clean bedroom" - to the end of the list as it’s not
// // that important
// // ● Now add "pay council tax" to the beginning of the list, as we need to
// // do this soon!
// // ● After this, we realise we have enough dog food - so remove "order
// // dog food" from the array
// // ● We’ve just done the dishes, but now we need to take out the
// // garbage, so replace "do the dishes" with "take out garbage"

// let toDo = ["order dog food", "do the dishes"];
// toDo.push("clean bedroom");
// toDo.unshift("pay council tax");
// toDo.splice(1, 1);
// toDo.splice(1, 1, "take out garbage");

// console.log(toDo);

// console.log("Exercise 9");

// // Let’s get some practice using splice().
// let fruits = ["orange", "apple", "banana"];
// // ● Can you replace “apple” with both “kiwi” and “mango”?
// // ● Can you use splice to replicate the behaviour of
// // unshift, by adding “peach” to the beginning of the
// // array?
// fruits.splice(1, 1, "kiwi", "mango");
// fruits.splice(0, 0, "peach");
// console.log(fruits);

console.log("Exercise 10");

// Create an array of the people sitting around you
// ● console.log the names in alphabetical order
// ● Create a function that takes a name and an array of
// names as parameters.
// ○ If the name is not in the array, it should return “<name> is not sitting
// at the table with <people in the array>”
// ○ If the name is in the array, it should return “<name> is sitting at the
// table with <people in the array>”
// ○ Output <people in the array> as a comma-separated string

let namesList = ["Oleh", "Natalie", "Ebrahim", "Zahra"];

function checkNames(name, namesList) {
  if (namesList.includes(name) === false) {
    return name + " is not sitting at the table with " + namesList.sort();
  } else {
    return name + " is sitting at the table with " + namesList.sort();
  }
}

console.log(namesList.sort());
console.log(checkNames("Irina", namesList));
