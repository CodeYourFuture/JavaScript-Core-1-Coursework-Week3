const stocks = ["aapl","msft","amzn","googl", "tsla"]; 

function showStocks(arr) {
    if (arr.length === 0) {
        console.log("Empty Portfolio");
        // return "Empty Portfolio;"
    }
    else {
    let i = 0;
    while (i < arr.length) {
        
   console.log(arr[i].toUpperCase());
   i++;
}
}
}




console.log(showStocks(stocks));



/* Write a function called showStocks that will…
Take an array of stock tickers as a parameter
Output “Empty Portfolio” if the array has no stocks in it
Otherwise, it should loop through the stocks and output each one after capitalising it - use console.log
Use while to loop through the array
The function does not need to return anything
An example array of stocks:
const stocks = ["aapl","msft","amzn","googl", "tsla"]; */
