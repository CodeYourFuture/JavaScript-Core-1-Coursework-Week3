function averageNumberOfCharacters(allArticleTitles) {
    let arrNumOfCharacters = [];
    let total = 0;
    let average = 0;
    for (const element of allArticleTitles) {
        arrNumOfCharacters.push(element.trim().length);
    }
    for (const element of arrNumOfCharacters) {
         total = total + element;
    }
     average = total / arrNumOfCharacters.length;
     return Math.round(average);
}


let arr = ["Streaming wars drive media groups to spend more than $100bn on new content",
    "Amazon Prime Video India country head: streaming is driving a TV revolution",
    "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
    "British companies look to muscle in on US retail investing boom",
    "Libor to take firm step towards oblivion on New Year's Day aa aa aa aa aa aa aa aa aa aa aa",
    "Audit profession unattractive to new recruits, says PwC boss",
    "Chinese social media users blast Elon Musk over near miss in space",
    "Companies raise over $12tn in 'blockbuster' year for global capital markets",
    "The three questions that dominate investment",
    "Brussels urges Chile's incoming president to endorse EU trade deal",]

    averageNumberOfCharacters(arr)