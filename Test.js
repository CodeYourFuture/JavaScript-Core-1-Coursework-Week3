let articleTitles = [
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

// function checkLengthOfHeadline (articleTitles) {
//     let arr = [];
//     for (i = 0; i < articleTitles.length; i++) {
//         if (articleTitles[i].length <= 65) {
//             arr.push(articleTitles[i]);
//         } 
//     } return arr;
// }

// function fewestWords (articleTitles) {
//     let shortest = "";
//     let fewestWordsSoFar = Number.MAX_VALUE;
//     for (i = 0; i < articleTitles.length; i++) {
//         let wordCount = articleTitles[i].match(/(\w+)/g).length;
//         if (wordCount < fewestWordsSoFar) {
//             fewestWordsSoFar = wordCount;
//             shortest = articleTitles[i];
//         }
//     } return shortest;
// }

// let arr = [];
// function headlinesWithNumbers(articleTitles) {
//     // TODO
//     for (let i = 0; i < articleTitles.length; i++) {
//         let letterNumber = /[0-9]+/;
//         if (articleTitles[i].match(letterNumber)) {
//             arr.push(articleTitles[i]);
//         }
//     }
//     return arr;
// }
// console.log(headlinesWithNumbers(articleTitles));



function averageNumberOfCharacters(articleTitles) {
    let ccTotal = 0;
    let StringCount = 0;
    for (i = 0; i < articleTitles.length; i++) {
        StringCount = articleTitles.length;
        let characterCount = articleTitles[i].length;
        ccTotal += characterCount;
    } return Math.round(ccTotal / StringCount);
}
console.log(averageNumberOfCharacters(articleTitles));