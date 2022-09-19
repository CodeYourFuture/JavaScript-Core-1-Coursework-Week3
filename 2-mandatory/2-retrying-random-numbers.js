/*
    In the below example, we want to keep calling generateRandomNumber until we get a value that is > 50.
    Implement this using a do-while loop.
*/

// This function shouldn't be changed
function generateRandomNumber() {
    console.log("Generating number...");
    return Math.round(Math.random() * 100);
}
// let randomNum = generateRandomNumber;

function getRandomNumberGreaterThan50() {
    // TODO - implement using a do-while loop
    let i = 100;
    // let randomNumber = generateRandomNumber;
    do {
        let random = generateRandomNumber();
        if (random > 50) {
            return random;
        }

        i--;
    } while (i > 50);

    // for (let i = 100; i > 50; i--) {
    //     if (randomNum > 50) {
    //         break;
    //     }
    //     console.log(randomNum());
    // }
}
// console.log(getRandomNumberGreaterThan50());
// getRandomNumberGreaterThan50();
/* ======= TESTS - DO NOT MODIFY ===== */

test("Returned value should always be greater than 50", () => {
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
});