/*const STOCKS = ["aapl", "msft", "amzn", "googl", "tsla"];

const CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS = [
  [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
  [340.69, 342.45, 334.69, 333.2, 327.29], // MSFT
  [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
  [2951.88, 2958.13, 2938.33, 2928.3, 2869.45], // GOOGL
  [1101.3, 1093.94, 1067.0, 1008.87, 938.53], // TSLA
];


  console.log(stockPriceAverage);
}
getAveragePrices(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS);

/*function getPriceChanges(closingPricesForAllStocks) {
  priceChangeArray = [];
  for (price of closingPricesForAllStocks) {
    let priceChange = Number((price[price.length - 1] - price[0]).toFixed(2));
    priceChangeArray.push(priceChange);
  }
  console.log(priceChangeArray);
}
getPriceChanges(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS);
function highestPriceDescriptions(closingPricesForAllStocks, stocks) {
  let highestPrice = 0;
  let highestPriceDesc = [];
  let stockName;
  let StockPrices;
  for (let i = 0; i < closingPricesForAllStocks.length; i++) {
    let highestPrice = 0;
    StockPrices = closingPricesForAllStocks[i];
    for (let j = 0; j < StockPrices.length; j++) {
      if (StockPrices[j] > highestPrice) {
        highestPrice = StockPrices[j];
      }
    }
    stockName = stocks[i].toUpperCase();
    highestPriceDesc.push(`The highest price of ${stockName} in the last 5 days was ${highestPrice}`);
  }
  console.log(highestPriceDesc);
}

highestPriceDescriptions(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS, STOCKS);*/
const ARTICLE_TITLES = [
  "Streaming wars drive media groups to spend more than $100bn on new content",
  "Amazon Prime Video India country head: streaming is driving a TV revolution",
  "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
  "British companies look to muscle in on US retail investing boom",
  "Libor to take firm step towards oblivion on New Year's Day",
  "Audit profession unattractive to new recruits, says PwC boss",
  "Chinese social media users blast Elon Musk over near miss in space",
  "Companies raise over $12tn in 'blockbuster' year for global capital markets",
  "The three questions that dominate investment",
  "Brussels urges Chile's incoming president to endorse EU trade deal",
];

function titleWithFewestWords(allArticleTitles) {
  /*const shorter = (left, right) => (left.length <= right.length ? left : right);

  console.log(allArticleTitles.reduce(shorter));
  console.log(
    allArticleTitles.reduce((a, b) => (a.length <= b.length ? a : b))
  );*/
  console.log(
    allArticleTitles.reduce(function (a, b) {
      return a.length <= b.length ? a : b;
    })
  );
}

titleWithFewestWords(ARTICLE_TITLES);
