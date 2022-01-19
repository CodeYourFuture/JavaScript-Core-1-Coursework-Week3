/*
    In the below example, we want to keep calling generateRandomNumber until we get a value that is > 50.
    Implement this using a do-while loop.
*/

// This function shouldn't be changed
function generateRandomNumber() {
  console.log("Generating number...");
  return Math.round(Math.random() * 100); // between 0 - 100
}

function getRandomNumberGreaterThan50() {
  // TODO - implement using a do-while loop
  n = 0;
  do {
    n = generateRandomNumber(); // random number between 0 - 100
  } while (n <= 50); // Do this until the condition is not met
  return n;
}
console.log(getRandomNumberGreaterThan50());
/* ======= TESTS - DO NOT MODIFY ===== */

test("Returned value should always be greater than 50", () => {
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
});
