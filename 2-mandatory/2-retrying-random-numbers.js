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
    let num;
    do{
         generateRandomNumber();                
    }while (num < 51);
    return generateRandomNumber() + 50;
} 
// console.log(generateRandomNumber());



// function getRandomNumberGreaterThan50() {
//   let res;
//   do {
//     res = generateRandomNumber();
//   } while (res <= 50);
//   if (res > 50) return res;
// }

console.log(getRandomNumberGreaterThan50()); 

// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);
/* ======= TESTS - DO NOT MODIFY ===== */

test("Returned value should always be greater than 50", () => {
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
    expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
});
