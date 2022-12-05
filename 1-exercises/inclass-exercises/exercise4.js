//Can you rewrite the showStocks function from Exercise 2 using a for loop?
const stocks = ["aapl","msft","amzn","googl", "tsla"]; 

function showStocks(arr) {
    if (arr.length === 0) {
        console.log("Empty Portfolio");
    }
    for (let i = 0; i < arr.length; i++) {
        let result = arr[i].toUpperCase();
        console.log(result);
    }
}

showStocks(stocks);