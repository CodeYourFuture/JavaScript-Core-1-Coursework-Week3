function potentialHeadlines(allArticleTitles) {
  let sutibleAricleTiteles = [];
  for (let i = 0; i < allArticleTitles.length; i++) {
    if (allArticleTitles[i].length <= 65) {
      sutibleAricleTiteles.push(allArticleTitles[i]);
    }
  }
  return sutibleAricleTiteles;
  // TODO
}
function titleWithFewestWords(allArticleTitles) {
  // TODO
  let tilteWithFewest = allArticleTitles.filter((item) => item.length <= 65);

  return tilteWithFewest[tilteWithFewest.length - 1];
}

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
  "hi",
  "Brussels urges Chile's incoming president to endorse EU trade deal",
];
console.log(potentialHeadlines(ARTICLE_TITLES));
console.log(titleWithFewestWords(ARTICLE_TITLES));
