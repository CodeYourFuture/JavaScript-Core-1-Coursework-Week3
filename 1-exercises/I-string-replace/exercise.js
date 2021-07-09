/* 
  You are given a sentence contains a story.

  Current it says 

  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."

  Change the story using .replace() so that it says 

  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
*/

let story =
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.";

let result = story.replace(/dogs|day|10|great/g, string => {
  return string === "dogs" ? "cats" 
  : string === "day" ? 
  "night" : string === "10" ? 
  100000 : "brilliant";
})

/* EXPECTED OUTPUT */

const util = require("util");

function test(test_name, actual, expected) {
  console.log("");
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: \nexpected: ${util.inspect(
      expected
    )} \nbut your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "1. Original story has not been changed",
  story,
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."
);

test(
  "2. The result of the replace is correct",
  result,
  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
);
