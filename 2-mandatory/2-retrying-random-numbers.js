/*
    In the below example, we want to keep calling generateRandomNumber until we get a value that is > 50.
    Implement this using a do-while loop.
*/

// This function shouldn't be changed
function generateRandomNumber() {
  console.log("Generating number...");
  return Math.round(Math.random() * 100);
}

function getRandomNumberGreaterThan50() {
  let num = Math.floor(Math.random() * upper) + 1;
  return num;
  i = 0;
  do {
    i += 1;
    if (i >= 50) {
      break;
    }
    text += i + " ";
  } while (i <= 50);
}
console.log(num);

/* ======= TESTS - DO NOT MODIFY ===== */

test("Returned value should always be greater than 50", () => {
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
});
