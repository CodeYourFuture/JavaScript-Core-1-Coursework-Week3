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
  // TODO - implement using a do-while loop
  let i = 0;
  do {
    i++;
    return generateRandomNumber();
  } while (i < 50);
}


// function evenNumbersSum(n) {
//   i = 0;
//   sum = 0;
//   do {
//     sum = sum + i * 2;
//     i++;
//   } while (i < n);
//   return sum;
// }


/* ======= TESTS - DO NOT MODIFY ===== */

test("Returned value should always be greater than 50", () => {
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
});
