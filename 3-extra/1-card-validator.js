
// 1) The function should have one parameter with name creditCardNumber and its name should be descriptive
// 2) Function should return boolean value, it should check argument : 1) is 16 digits and all of them are number, 2) includes at least two different number (16 digits should not be all same number), 3) The final digit should be even, 4) The sum of all the digits are greater than 16; 

// Note: commented out code (below console.log commands) was written first to split the work into smaller parts. Since it repeats same codes many times, they are commented out and re-written in a cleaner way. I left them in the code though for educational purposes.


function isCreditCardNumberValid(creditCardNumber) {
    const stringCreditCardNumber = creditCardNumber.toString();  // turn credit card number into a string
    const stringCreditCardNumberArray = stringCreditCardNumber.split(""); // turn the string into an array
    const creditCardNumberArray = stringCreditCardNumberArray.map(e => Number(e));  // turn array of strings into array of numbers
    const sum = creditCardNumberArray.reduce((x, y) => x + y);  // get the sum of all the elements in the array
    const isAllNumber = creditCardNumberArray.every(e => typeof e === 'number'); // check if all elements are number
    const is16Digit = creditCardNumberArray.length === 16; 
    const isAtLeastTwoDifferent = creditCardNumberArray.some(e => e !== creditCardNumberArray[0]); // check if there is at least one different number in the array
    const isSumGreaterThan16 = sum > 16;
    const isLastDigitEven = creditCardNumberArray[creditCardNumberArray.length - 1] % 2 === 0;
    return isAllNumber && is16Digit && isAtLeastTwoDifferent && isSumGreaterThan16 && isLastDigitEven;
}


console.log(isCreditCardNumberValid(9999777788880000)); // returns true
console.log(isCreditCardNumberValid(6666666666661666)); // returns true
console.log(isCreditCardNumberValid(4444444444444444)); // returns false
console.log(isCreditCardNumberValid(1111111111111110)); // returns false
console.log(isCreditCardNumberValid(6666666666666661)); // returns false







// function isCreditCardNumberValid (creditCardNumber) {
//     const is16Digit = contains16Digit(creditCardNumber);
//     const isAtLeastTwoDifferentNumber = containsAtLeastTwoDifferentNumber(creditCardNumber);
//     const isSumGreaterThan16 = sumGreaterThan16(creditCardNumber);
//     const isLastDigitEven = checkLastDigit(creditCardNumber);
//     return is16Digit && isAtLeastTwoDifferentNumber && isSumGreaterThan16 && isLastDigitEven;
// }

// function contains16Digit(creditCardNumber) {
//   const stringCreditCardNumber = creditCardNumber.toString();
//   const stringCreditCardNumberArray = stringCreditCardNumber.split("");
//   const creditCardNumberArray = stringCreditCardNumberArray.map((e) =>
//     Number(e)
//   );
//   const isAllNumber = creditCardNumberArray.every((e) => typeof e === "number");
//   const is16Digit = creditCardNumberArray.length === 16;
//   return is16Digit && isAllNumber;
// }

// function containsAtLeastTwoDifferentNumber (creditCardNumber) { // check at least two characters are the same, return true if there are at least two different characters
//     const stringCreditCardNumber = creditCardNumber.toString();  // transform number to string in order to use split method
//     const stringCreditCardNumberArray = stringCreditCardNumber.split('');
//     return stringCreditCardNumberArray.some(e => e !== stringCreditCardNumberArray[0]);
// }

// function sumGreaterThan16 (creditCardNumber) {
//     const stringCreditCardNumber = creditCardNumber.toString();
//     const stringCreditCardNumberArray = stringCreditCardNumber.split('');
//     const creditCardNumberDigitsArray = stringCreditCardNumberArray.map(element => Number(element));
//     const sum = creditCardNumberDigitsArray.reduce((x, y) => x + y);
//     return sum > 16;
// }

// function checkLastDigit(creditCardNumber) {
//     const stringCreditCardNumber = creditCardNumber.toString();
//     return stringCreditCardNumber.charAt(stringCreditCardNumber.length - 1) % 2 === 0;
// }
