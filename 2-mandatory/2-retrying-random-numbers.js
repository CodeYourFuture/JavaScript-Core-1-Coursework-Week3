/*
    In the below example, we want to keep calling generateRandomNumber until we get a value that is > 50.
    Implement this using a do-while loop.
*/

// This function shouldn't be changed
function generateRandomNumber() {
    console.log("Generating number...");
    return Math.round(Math.random() * 100);
}

// function getRandomNumberGreaterThan50() {
//     return generateRandomNumber() + 50;
// }

function getRandomNumberGreaterThan50() {
    let i = 0;
    let arr = [];
    do {
        arr.push(generateRandomNumber());        
        if (arr[i] > 50) {
            arr = arr[i];
        }
        i++;
    }
    while (i <= arr.length);
    return arr
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("Returned value should always be greater than 50", () => {
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
});
