/*
    In the below example, we want to keep calling generateRandomNumber until we get a value that is > 50.
    Implement this using a do-while loop.
*/

// This function shouldn't be changed
function generateRandomNumber() {
    // console.log("Generating number...");
    return Math.round(Math.random() * 100);
}

function getRandomNumberGreaterThan50() {
    // TODO - implement using a do-while loop
    let num;
    do{
        num = generateRandomNumber();                
    }while (num < 51);
    return generateRandomNumber() + 50;
} 



console.log(getRandomNumberGreaterThan50()); 



test("Returned value should always be greater than 50", () => {
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
});
