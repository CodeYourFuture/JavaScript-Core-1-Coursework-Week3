const STOCKS = ["aapl", "msft", "amzn", "googl", "tsla"];

const CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS = [
    [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
    [340.69, 342.45, 334.69, 333.20, 327.29], // MSFT
    [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
    [2951.88, 2958.13, 2938.33, 2928.30, 2869.45], // GOOGL
    [1101.30, 1093.94, 1067.00, 1008.87, 938.53] // TSLA
];



// function getAveragePrices(closingPricesForAllStocks) {
//     let total = 0;
//     let average = 0;
//     arrayOfAverages = [];
//     for (const subArray of closingPricesForAllStocks) {
//         for (const element of subArray) {
//             total = total + element;
//         }
//         average = total / subArray.length;
//         total = 0;        
//         arrayOfAverages.push(Math.round(average *100)/100);
//     }
//     console.log(arrayOfAverages);
// }

// getAveragePrices(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS)

function getPriceChanges(closingPricesForAllStocks) {
    let priceDifference = 0;
    let arrayOfChanges = [];
    for (const subArray of closingPricesForAllStocks) {
        
        priceDifference = Math.round((subArray[subArray.length -1] - subArray[0]) * 100) /100
        arrayOfChanges.push(priceDifference);
    }

    console.log(arrayOfChanges);
}

getPriceChanges(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS)