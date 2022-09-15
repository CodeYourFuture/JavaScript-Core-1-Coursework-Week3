/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/

function potentialHeadlines(allArticleTitles) {
  let shortTitles = [];
  let i = 0;

  while (i < allArticleTitles.length) {
    if (allArticleTitles[i].length < 66) {
      shortTitles.push(allArticleTitles[i]);
    }
    i++;
  }
  return shortTitles;
}

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be separated by a space)
// */

function titleWithFewestWords(allArticleTitles) {
  let shortestTitle;
  let shortestTitleLengthInWords;

  for (let i = 0; i < allArticleTitles.length; i++) {
    const title = allArticleTitles[i];
    const titleLengthInWords = title.split(" ").length;
    if (
      shortestTitle === undefined ||
      shortestTitleLengthInWords > titleLengthInWords
    ) {
      shortestTitle = title;
      shortestTitleLengthInWords = titleLengthInWords;
    }
  }
  return shortestTitle;
}

// function titleWithFewestWords(allArticleTitles) {
//   let shortestTitle = allArticleTitles[0]
//   for (let i = 0; i < allArticleTitles.length; i++) {
//     if (allArticleTitles[i].length < shortestTitle.length) {
//       shortestTitle = allArticleTitles[i];
//     }
//   }
//   return smallest;
// } //shorter and better way of solving it without using a method

/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/
function headlinesWithNumbers(allArticleTitles) {
  const titlesToReturn = [];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  allArticleTitles.forEach((title) => {
    title.split("").forEach((character) => {
      if (numbers.includes(character)) {
        titlesToReturn.push(title);
      }
    });
  });
  return titlesToReturn;
}

// function headlinesWithNumbers(allArticleTitles) {

//   let arrayWithNum = [];
//   for (let i = 0; i < allArticleTitles.length; i++) {
//     for (let j = 0; j < allArticleTitles[i].length; j++) {
//       if (allArticleTitles[i][j] >= "0" && allArticleTitles[i][j] <= "9") {
//         arrayWithNum.push(allArticleTitles[i]);
//       }
//     }
//   }
//   return arrayWithNum;
// } //simpler way
/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/

function averageNumberOfCharacters(allArticleTitles) {
  let sum = 0;
  for (let i = 0; i < allArticleTitles.length; i++) {
    sum += allArticleTitles[i];
  }
  return Math.round(sum.trim().length / allArticleTitles.length);
}

// function averageNumberOfCharacters(allArticleTitles) {

//   let numOfChar = 0;
//   for (let i = 0; i < allArticleTitles.length; i++) {
//     numOfChar = numOfChar +=
//       allArticleTitles[i].length / allArticleTitles.length;
//   }
//   return Math.round(numOfChar);
// }

/* ======= List of Articles - DO NOT MODIFY ===== */
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

/* ======= TESTS - DO NOT MODIFY ===== */

test("should only return potential headlines", () => {
  expect(new Set(potentialHeadlines(ARTICLE_TITLES))).toEqual(
    new Set([
      "British companies look to muscle in on US retail investing boom",
      "Libor to take firm step towards oblivion on New Year's Day",
      "Audit profession unattractive to new recruits, says PwC boss",
      "The three questions that dominate investment",
    ])
  );
});

test("should return an empty array for empty input", () => {
  expect(potentialHeadlines([])).toEqual([]);
});

test("should return the title with the fewest words", () => {
  expect(titleWithFewestWords(ARTICLE_TITLES)).toEqual(
    "The three questions that dominate investment"
  );
});

test("should only return headlines containing numbers", () => {
  expect(new Set(headlinesWithNumbers(ARTICLE_TITLES))).toEqual(
    new Set([
      "Streaming wars drive media groups to spend more than $100bn on new content",
      "Companies raise over $12tn in 'blockbuster' year for global capital markets",
    ])
  );
});

test("should return the average number of characters in a headline", () => {
  expect(averageNumberOfCharacters(ARTICLE_TITLES)).toEqual(65);
});
