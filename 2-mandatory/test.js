const STOCKS = ["aapl", "msft", "amzn", "googl", "tsla"];

const CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS = [
  [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
  [340.69, 342.45, 334.69, 333.2, 327.29], // MSFT
  [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
  [2951.88, 2958.13, 2938.33, 2928.3, 2869.45], // GOOGL
  [1101.3, 1093.94, 1067.0, 1008.87, 938.53], // TSLA
];
console.log(getAveragePrices(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS));

function getAveragePrices(closingPricesForAllStocks) {
  let averageArr = [];

  for (let index of closingPricesForAllStocks) {
    let total = 0;
    for (let stockIndex in index) {
      total += index[stockIndex];
    }
    let aveNum = total / index.length;
    averageArr.push(Number(aveNum.toFixed(2)));
  }
  return averageArr;
}
