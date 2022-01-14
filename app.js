const STOCKS = ["aapl", "msft", "amzn", "googl", "tsla"];

const CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS = [
    [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
    [340.69, 342.45, 334.69, 333.20, 327.29], // MSFT
    [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
    [2951.88, 2958.13, 2938.33, 2928.30, 2869.45], // GOOGL
    [1101.30, 1093.94, 1067.00, 1008.87, 938.53] // TSLA
];

function highestPriceDescriptions(closingPricesForAllStocks, stocks) {
    let highestPriceDescriptionArr = [];

  
    
    function compareFunction(a, b) {
        return b-a
    }
    
    
    for (let currStock = 0; currStock < closingPricesForAllStocks.length; currStock++) {
        const sortedPrice = closingPricesForAllStocks[currStock].sort(compareFunction)
        const highestPrice = (Number(sortedPrice[0]).toFixed(2))
        const highestPriceDescription = `The highest price of ${stocks[currStock].toUpperCase()} in the last 5 days was ${highestPrice}`
        highestPriceDescriptionArr.push(highestPriceDescription)

    }
    return highestPriceDescriptionArr
}

console.log(highestPriceDescriptions(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS, STOCKS))