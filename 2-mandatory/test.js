const STOCKS = ["aapl", "msft", "amzn", "googl", "tsla"];

const CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS = [
    [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
    [340.69, 342.45, 334.69, 333.20, 327.29], // MSFT
    [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
    [2951.88, 2958.13, 2938.33, 2928.30, 2869.45], // GOOGL
    [1101.30, 1093.94, 1067.00, 1008.87, 938.53] // TSLA
];

function getAveragePrices(closingPricesForAllStocks) {
    let avgArray = [], sum = 0, avgStr = "", avgNum = 0;
    for (let i = 0; i < STOCKS.length; i++)
    {
        for (element of CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS[i])
        {
            sum = 0;

            for (let j = 0; j < 5; j++)
            {
                sum += CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS[i][j];
            }

            avgStr = (sum / 5).toFixed(2);
            avgNum = parseInt(avgStr);
        }

        avgArray[i] = avgNum;
    }

    return avgArray;
}

console.log(getAveragePrices)