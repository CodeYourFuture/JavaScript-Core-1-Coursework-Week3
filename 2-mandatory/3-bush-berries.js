/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.

  The pink berries are the ONLY safe ones to eat.

  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.
  Use the tests to confirm which message to return
  
  This exercise can be solved in a few different ways. One way might include the array methods
  .some() and .every(). 
  
  The .some() method tests to see if some of the values (at least 1) in an array 
  match what you're looking for and returns true or false. 
  
  The .every() method will only return true if all values match watch you're looking for. 
  
  Let's first look at an example that will teach you how to use these methods.
*/

function isBushSafe(berryArray) {
  //Write your code here
  const isSafe = berryArray.every(element => element === 'pink');
  return isSafe ? "Bush is safe to eat from" : "Toxic! Leave bush alone!";
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("isBushSafe finds toxic busy", () => {
  expect(
    isBushSafe(["pink", "pink", "pink", "neon", "pink", "transparent"])
  ).toEqual("Toxic! Leave bush alone!");
});

test("isBushSafe function finds safe bush", () => {
  expect(isBushSafe(["pink", "pink", "pink", "pink"])).toEqual(
    "Bush is safe to eat from"
  );
});
