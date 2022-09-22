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
  // TODO
}
function averageNumberOfCharacters(allArticleTitles) {
  let aveNumofCharacters = [];
  for (let i in allArticleTitles) {
    aveNumofCharacters.push(allArticleTitles[i].length);
  }
  let total = 0;
  for (let j in aveNumofCharacters) {
    total += aveNumofCharacters[j];
  }
  let average = total / aveNumofCharacters.length;

  return Math.round(average);
  // TODO
}
function getPriceChanges(closingPricesForAllStocks) {
  let diffPrices = [];
  for (index in closingPricesForAllStocks) {
    let difference = index[index.length - 1] - index[0];
    diffPrices.push(Number(difference.toFixed(2)));
  }
  // TODO
  return diffPrices;
}
const CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS = [
  [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
  [340.69, 342.45, 334.69, 333.2, 327.29], // MSFT
  [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
  [2951.88, 2958.13, 2938.33, 2928.3, 2869.45], // GOOGL
  [1101.3, 1093.94, 1067.0, 1008.87, 938.53], // TSLA
];
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
console.log(getPriceChanges(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS));
