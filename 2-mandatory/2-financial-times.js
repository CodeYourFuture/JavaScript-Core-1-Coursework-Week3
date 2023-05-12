/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/

function potentialHeadlines(allArticleTitles) {
    // TODO
    const headlines = [];
    for (let articleTitle of allArticleTitles) {
        if (articleTitle.length <= 65) {
            headlines.push(articleTitle);
        }
    }
    return headlines;
}

//I start with the function potentailHeadlines with an array argument. Inside the brakcets I have a local variable headlines
// that equals and empty array. It is used to the for ... if loop. It checks one article of all articles you see declared in
// the function. Then i have brackets with if and check the articles titles length is 65 or less. Next the .push method 
// push the headlines. Then I use return the headlines.


/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/



function titleWithFewestWords(allArticleTitles) {
    // TODO
    let shortestHeadlines = allArticleTitles[0];
    // console.log(allArticleTitles[0])
    for (let i = 1; i < allArticleTitles.length; i++) {
        let currentTitle = allArticleTitles[i];
        if (currentTitle.length < shortestHeadlines.length) {
            shortestHeadlines = currentTitle  
        }
    }
    return shortestHeadlines;
}
// I start with a function that want to find a title with fewest words. I have an array as a parameter. Inside the brackets
// I use a let variable shortestHeadlines that equals allArticleTitles with counting from zero. I use a for... if loop with a
// let variable i equals 1, if i is less than the length of allArticleTitles, i count 1. Then I have a let variable currentTitle
// that equals allArticleTitles and the if statement that check if length of the currentTitle to shortestHeadlines then 
// shortestHeadlines equals currentTitles. Then I return the variable for the function.  
/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/
// 
function headlinesWithNumbers(allArticleTitles) {
    // TODO
  let newArr = [];
  for (let title of allArticleTitles) {
    if (/[0-9]/.test(title) === true) {
      newArr.push(title);
    }
  }

  return newArr;
}
// I start with a function headlineWithNumbers with an array checking all article titles. Inside the brackets I have a let variable
// with a new array to store article titles that contain at least a number. Then I use a for ... if loop that have let variable to
// I use .test method to check for digits from 0 - 9. If there are at least a digit it return true and a title is added to newArr and
// push to containing all articles with at least a number. 
// 
/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/



function averageNumberOfCharacters(allArticleTitles) {
    // TODO
    let averageCharacter = 0;
    let numberOfArticles = 0;
    for (let articleTitle of allArticleTitles) {
        averageCharacter += articleTitle.length;
        numberOfArticles += 1;
    }
    return Math.round(averageCharacter / numberOfArticles);
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
    expect(new Set(potentialHeadlines(ARTICLE_TITLES))).toEqual(new Set([
        "British companies look to muscle in on US retail investing boom",
        "Libor to take firm step towards oblivion on New Year's Day",
        "Audit profession unattractive to new recruits, says PwC boss",
        "The three questions that dominate investment"
    ]));
});

test("should return an empty array for empty input", () => {
    expect(potentialHeadlines([])).toEqual([]);
});

test("should return the title with the fewest words", () => {
    expect(titleWithFewestWords(ARTICLE_TITLES)).toEqual("The three questions that dominate investment");
});

test("should only return headlines containing numbers", () => {
    expect(new Set(headlinesWithNumbers(ARTICLE_TITLES))).toEqual(new Set([
        "Streaming wars drive media groups to spend more than $100bn on new content",
        "Companies raise over $12tn in 'blockbuster' year for global capital markets"
    ]));
});

test("should return the average number of characters in a headline", () => {
    expect(averageNumberOfCharacters(ARTICLE_TITLES)).toEqual(65);
});
