// function potentialHeadlines(allArticleTitles) {
//     let arr = [];
//     for (const element of allArticleTitles) {
//         if (element.length <= 65) {
//             arr.push(element);
//         }
//     }return arr;
// }



// function headlinesWithNumbers(allArticleTitles) {
//     let array = []
//     for (const element of allArticleTitles){
//         if ( /\d/.test(element)) {
//             array.push(element);
//         }
//     } return array;
// }

// function titleWithFewestWords(allArticleTitles) {
//     const allSentences = allArticleTitles[0];
//     let smallHeadline = ""
//     for (let i = 0; i < allArticleTitles.length; i++) {
//         if (allSentences[i].length > 0 && allSentences[i].length < 2) {
//             if(allSentences[i].length > smallHeadline.length) { 
//             smallHeadline = allSentences[i];
//                 return smallHeadline                        
//             } 
            
//         } 
//     }
//     // TODO
// }


// function titleWithFewestWords(allArticleTitles){
    // let titleLength = [];
    // let result = "";
    // for (let i = 0; i < allArticleTitles.length; i++){
    //     let titleArray = allArticleTitles[i].split(" ");
    //     let articleLength = titleArray.length;
    //     if(result.length < articleLength.length){
    //         result = allArticleTitles[articleLength];
    //     }
    // }
    // return result;

//     for(const element of allArticleTitles) {
//         if (allArticleTitles[0] > 1) {
//             smallArray += allArticleTitles[i]
//         }
//     }
function titleWithFewestWords(allArticleTitles){
    // let titleLength = [];
    let result = " ";
    for (let i = 0; i < allArticleTitles.length; i++){
        let titleArray = allArticleTitles[i].split(" ");
        let articleLength = titleArray.length;
        if(result.length < articleLength){
            result = allArticleTitles[i];
            }
    }
    return result;
}

// }





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

console.log(titleWithFewestWords(arr))