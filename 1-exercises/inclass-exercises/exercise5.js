// for of loops
const stocks = ["aapl","msft","amzn","googl", "tsla"];

function showStocks(stocks) {
    for (item of stocks) {
    console.log(item.toUpperCase());

    }
}

showStocks(stocks);