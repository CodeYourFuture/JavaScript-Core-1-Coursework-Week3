/*const ARTICLE_TITLES = [
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
*/

let arrayofNumbers = ["1 Hi 1", "Hi 2", "Hi nothing", "Hi 3"];
// let arrayofNumbers = ["1 Hi 1", "Hi 2"];

function headlinesWithNumbers(allArticleTitles) {
  let returnedArray1 = [];
  for (let element of allArticleTitles) {
    let [...tester] = element;

    for (let numChecker of tester) {
      if (numChecker >= 0 && numChecker !== " ") {
        returnedArray1.push(element);
        break;
      }
    }
  }
  return returnedArray1;
}
/*
  for (let element of allArticleTitles) {
    for (let numChecker of element) {
      if (typeof numChecker === "number") {
        console.log(element + ": contains a number");
      } else {
        console.log("not today");
      }
    }
  }
}*/

console.log(headlinesWithNumbers(arrayofNumbers));
//headlinesWithNumbers(ARTICLE_TITLES);
