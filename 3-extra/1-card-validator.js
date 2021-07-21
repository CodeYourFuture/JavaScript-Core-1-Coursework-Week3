/*In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.*/

//*PSEUDO CODE
//*Function to check that input is a number
//*Function to check array length
//*contains at least 2 different input numbers
//*check last input is an even number
//*sum is greater than 16

//check input is number
function isNumbersOnly(array) {
  if(array.every((element) => element >= 0 && element < 9)) {
    return true;
  }
  return false;
}

//check array length
function checkLength(array) {
  const length = 16;
  return array.length === length;
}

//check if numbers are different
function ifDifferent(array) {
  return !array.every((num) => num === array[0]);
}

//check if last digit is even number
function isLastDigitEven(array) {
  return array[array.length -1] % 2 === 0;
}

//sum of inputs is greater than 16
function sumGreaterThan16(array) {
  const length = 16;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer) > length;
}


function validateCreditCardNumber(cardNumber) {
  const ccNumber = cardNumber.toString(); //converts to string if not already
  let creditCardNumber = ccNumber.split(""); //converts string into an array
  creditCardNumber = creditCardNumber.map((i) => Number(i)); //checks if all inputs are typeof Number 

  return isNumbersOnly(creditCardNumber) &&
          checkLength(creditCardNumber) &&
          ifDifferent(creditCardNumber) &&
          isLastDigitEven(creditCardNumber) &&
          sumGreaterThan16(creditCardNumber);
}

//*Own test suite

const firstCard = "11223344556677888"; //more than 16 digits
const secondCard = "6666666666661666"; //valid
const thirdCard = "a92332119c011112"; //invalid(invalid characters)
const fourthCard = "4444444444444444"; //invalid(only one type of number)
const fifthCard = "1111111111111110"; //invalid(sum less than 16)
const sixthCard = "6666666666666661"; //invalid(off final number)



test("Card validator Case 1", () => {
  expect(validateCreditCardNumber(firstCard)).toEqual(false); 
});
test("Card validator Case 2", () => {
  expect(validateCreditCardNumber(secondCard)).toEqual(true);
});
test("Card validator Case 3", () => {
  expect(validateCreditCardNumber(thirdCard)).toEqual(false);
});
test("Card validator Case 4", () => {
  expect(validateCreditCardNumber(fourthCard)).toEqual(false);
});
test("Card validator Case 5", () => {
  expect(validateCreditCardNumber(fifthCard)).toEqual(false);
});
test("Card validator Case 6", () => {
  expect(validateCreditCardNumber(sixthCard)).toEqual(false);
});



