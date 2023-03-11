/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/
function potentialHeadlines(allArticleTitles) {
    // TODO
}

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/
function titleWithFewestWords(allArticleTitles) {
    // TODO
}

/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/
function headlinesWithNumbers(allArticleTitles) {
    // TODO
}

/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/
function averageNumberOfCharacters(allArticleTitles) {
    // TODO
}



/* ======= List of Articles - DO NOT MODIFY ===== */
function articleTitles() {
    return [
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
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("should only return potential headlines", () => {
    const titles = articleTitles();
    expect(new Set(potentialHeadlines(titles))).toEqual(new Set([
        "British companies look to muscle in on US retail investing boom",
        "Libor to take firm step towards oblivion on New Year's Day",
        "Audit profession unattractive to new recruits, says PwC boss",
        "The three questions that dominate investment"
    ]));
    expectArrayIsUnchanged(titles, articleTitles());
});

test("should return an empty array for empty input", () => {
    expect(potentialHeadlines([])).toEqual([]);
});

test("should return the title with the fewest words", () => {
    const titles = articleTitles();
    expect(titleWithFewestWords(articleTitles())).toEqual("The three questions that dominate investment");
    expectArrayIsUnchanged(titles, articleTitles());
});

test("should only return headlines containing numbers", () => {
    const titles = articleTitles();
    expect(new Set(headlinesWithNumbers(titles))).toEqual(new Set([
        "Streaming wars drive media groups to spend more than $100bn on new content",
        "Companies raise over $12tn in 'blockbuster' year for global capital markets"
    ]));
    expectArrayIsUnchanged(titles, articleTitles());
});

test("should return the average number of characters in a headline", () => {
    const titles = articleTitles();
    expect(averageNumberOfCharacters(titles)).toEqual(65);
    expectArrayIsUnchanged(titles, articleTitles());
});

function expectArrayIsUnchanged(first, second) {
    // arguments to functions should not be modified
    // this expectation checks arrays have the same values, to make sure arguments have not been changed
    expect(first).toEqual(second);
}
