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
    do {
      x = generateRandomNumber();
    }
    while (x <= 50);
// console.log(x);
return x;
}

// getRandomNumberGreaterThan50();

// Quite enlightening exercise to realise that looping is not only about having a variable periodically increasing/decreasing in order to achieve something
// It's more about a condition and its 'truthiness' (or 'falsiness') in which case a body of code has to be executed
// This applies specially to the while 

/* ======= TESTS - DO NOT MODIFY ===== */

test("Returned value should always be greater than 50", () => {
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
});
