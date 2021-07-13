/* 
  You are given a sentence contains a story.

  Current it says 

  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."

  Change the story using .replace() so that it says 

  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
*/

let story =
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.";

let result = story.replace(
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.",
  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
);

//! another solution with replace-once npm package `npm install --save replace-once`
let result1 = require("replace-once");
var str =
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.";
var find = ["dogs", "day", "10", "dogs", "great", "day"];
var replace = ["cats", "night", "100000", "cats", "brilliant", "night"];
result1(str, find, replace, "gi");
console.log(result1(str, find, replace, "gi"));
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
