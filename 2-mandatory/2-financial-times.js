/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/

function potentialHeadlines(allArticleTitles) {
  const shortArticleTitles = [];
  for (const articleTitle of allArticleTitles) {
    if (articleTitle.length <= 65) {
      shortArticleTitles.push(articleTitle);
    }
  }
  return shortArticleTitles;
}

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/

// count the words
// compare the number of words with each other to find the one with the fewest words
// translate the number of words back to its title
// return a title

function titleWithFewestWords(allArticleTitles) {
  let titleWithFewestWordSoFar = allArticleTitles[0]; // Assume the first title has the fewest word;
  let smallestWordCount = titleWithFewestWordSoFar.split(" ").length; // converting string to a number so we can compare

  for (let i = 1; i < allArticleTitles.length; i++) {
    // start from 1 not 0 because you're comparing to 0
    const currentArticleWordCount = allArticleTitles[i].split(" ").length; // split & count the new article title to compare to OG
    if (currentArticleWordCount < smallestWordCount) {
      titleWithFewestWordSoFar = allArticleTitles[i]; // this current title takes the place of previous titleWithFewest words
      smallestWordCount = currentArticleWordCount; //converting the number back to the string
    }
  }
  return titleWithFewestWordSoFar;
}

/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/

function headlinesWithNumbers(allArticleTitles) {
  const numberTitle = [];
  for (const articleTitle of allArticleTitles) {
    for (let character = 0; character < articleTitle.length; character++) {
      if (articleTitle[character] >= "0" && articleTitle[character] <= "9") {
        // the number there are actually handled like strings - a character so they are ascii
        numberTitle.push(articleTitle);
        break;
      }
    }
  }
  return numberTitle;
}

/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/

function averageNumberOfCharacters(allArticleTitles) {
  let averageTitleChars =
    allArticleTitles.join("").length / allArticleTitles.length;
  return Math.round(averageTitleChars);
}

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
