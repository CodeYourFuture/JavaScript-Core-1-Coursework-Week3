/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/

    // function potentialHeadlines(allArticleTitles) {
    //     // Create an empty array to store the potential headlines
    //     const potentialHeadlines = [];
      
    //     // Loop through each article title in the input array
    //     for (let i = 0; i < allArticleTitles.length; i++) {
    //       const articleTitle = allArticleTitles[i];
      
    //       // Check if the title is 65 characters or less
    //       if (articleTitle.length <= 65) {
    //         // If it is, add it to the potential headlines array
    //         potentialHeadlines.push(articleTitle);
    //       }
    //     }
      
    //     // Return the array of potential headlines
    //     return potentialHeadlines;
    //   }

    
    //   Using filter function with loops

    // function filterPotentialHeadlines(allArticleTitles){
    //   let potentialHeadlines = [];
    //   for(let title of allArticleTitles){
    //     if(title.length <= 65){
    //       potentialHeadlines.push(title);
    //     }
    //   }
    //   return potentialHeadlines;
    // }

    // const allArticleTitles = [   "Streaming wars drive media groups to spend more than $100bn on new content",
    // "Amazon Prime Video India country head: streaming is driving a TV revolution",
    // "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
    // "British companies look to muscle in on US retail investing boom",
    // "Labor to take firm step towards oblivion on New Year's Day",
    // "Audit profession unattractive to new recruits, says PwC boss",
    // "Chinese social media users blast Elan Musk over near miss in space",
    // "Companies raise over $12tn in 'blockbuster' year for global capital markets",
    // "The three questions that dominate investment",
    // "Brussels urges Chile's incoming president to endorse EU trade deal",]
    //   console.log(filterPotentialHeadlines(allArticleTitles));
    

    //   Using the filter function without loops

   
    function isPotentialHeadline(articleTitle){
      return articleTitle.length <= 65;
    }

    function filterPotentialHeadlines(articleTitles){ 
      // Here filter takes the function as a parameter
      return articleTitles.filter(isPotentialHeadline);    
    }

      const articleTitles = [  "Streaming wars drive media groups to spend more than $100bn on new content",
      "Amazon Prime Video India country head: streaming is driving a TV revolution",
      "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
      "British companies look to muscle in on US retail investing boom",
      "Labor to take firm step towards oblivion on New Year's Day",
      "Audit profession unattractive to new recruits, says PwC boss",
      "Chinese social media users blast Elan Musk over near miss in space",
      "Companies raise over $12tn in 'blockbuster' year for global capital markets",
      "The three questions that dominate investment",
      "Brussels urges Chile's incoming president to endorse EU trade deal",]

      console.log(filterPotentialHeadlines(articleTitles));
    
   
    


/* 
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be separated by a space)
*/
          function titleWithFewestWords(allArticleTitles) {

  let fewestWords = allArticleTitles[0];

  for (let i = 0; i < allArticleTitles.length; i++) {
    if (fewestWords.length > allArticleTitles[i].length) {
      fewestWords = allArticleTitles[i];
    }
  }

  return fewestWords;
}
  

/*
    The editor of the FT has realized that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/

function headlinesWithNumbers(allArticleTitles) {
    const headlinesWithNumbers = [];
  
    for (let i = 0; i < allArticleTitles.length; i++) {
      const articleTitle = allArticleTitles[i];
      
      for (let j = 0; j < articleTitle.length; j++) {
        const character = articleTitle.charAt(j);
        
        if (!isNaN(parseInt(character))) {
          headlinesWithNumbers.push(articleTitle);
        }
      }
    }
  
    return headlinesWithNumbers;
  }
  

/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/
 
function averageNumberOfCharacters(allArticleTitles) {
    let totalChars = 0;
  
    for (let i = 0; i < allArticleTitles.length; i++) {
      totalChars += allArticleTitles[i].length;
    }
  
    const averageChars = Math.round(totalChars / allArticleTitles.length);
  
    return averageChars;
  }
 


  


/* ======= List of Articles - DO NOT MODIFY ===== */
const ARTICLE_TITLES = [
    "Streaming wars drive media groups to spend more than $100bn on new content",
    "Amazon Prime Video India country head: streaming is driving a TV revolution",
    "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
    "British companies look to muscle in on US retail investing boom",
    "Labor to take firm step towards oblivion on New Year's Day",
    "Audit profession unattractive to new recruits, says PwC boss",
    "Chinese social media users blast Elan Musk over near miss in space",
    "Companies raise over $12tn in 'blockbuster' year for global capital markets",
    "The three questions that dominate investment",
    "Brussels urges Chile's incoming president to endorse EU trade deal",
];

/* ======= TESTS - DO NOT MODIFY ===== */

test("should only return potential headlines", () => {
    expect(new Set(filterPotentialHeadlines(ARTICLE_TITLES))).toEqual(new Set([
        "British companies look to muscle in on US retail investing boom",
        "Labor to take firm step towards oblivion on New Year's Day",
        "Audit profession unattractive to new recruits, says PwC boss",
        "The three questions that dominate investment"
    ]));
});

test("should return an empty array for empty input", () => {
    expect(filterPotentialHeadlines([])).toEqual([]);
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
