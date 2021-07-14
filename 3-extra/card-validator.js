/** @format */

// <!-- @format -->

// ## **PROJECT: Credit Card Validator**

// In this project you'll write a script that validates whether or not a credit card number is valid.

// Here are the rules for a valid number:

// -    Number must be 16 digits, all of them must be numbers.
// -    You must have at least two different digits represented (all of the digits cannot be the same).
// -    The final digit must be even.
// -    The sum of all the digits must be greater than 16.

// For example, the following credit card numbers are valid:

// ```markdown
// 9999777788880000
// 6666666666661666
// ```

// And the following credit card numbers are invalid:

// ```markdown
// a92332119c011112 (invalid characters)
// 4444444444444444 (only one type of number)
// 1111111111111110 (sum less than 16)
// 6666666666666661 (odd final number)
// ```

// These are the requirements your project needs to fulfill:

// -    Make a JavaScript file with a name that describes its contents.
// -    Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
// -    Write at least 2 comments that explain to others what a line of code is meant to do.
// -    Return a boolean from the function to indicate whether the credit card number is valid.
// -    Use `node` from the command line to test if your code works as expected.

// Good luck!

//checks length should be 16
function checkLength(arr) {
    const length = 16;
	return arr.length === length;
}

//checks if the given number is Even
function isEven(arr) {
	arr = +arr.join("");
	return arr % 2 === 0;
}
//checks sum should be greater than 16 
function sum(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const length = 16;
	return arr.reduce(reducer) > length;
}
//not all numbers should be same
function ifSame(arr) {
	return !arr.every((v) => v === arr[0]);
}
//all digits should be numbers 
function isNumber(arr) {
	if (arr.every((element) => element >= 0 && element <= 9)) return true;
	else return false;
}

//function to validate Card Numbers
function validateCreditCardNumber(cardNumber) {
	const card_Number = cardNumber.toString(); //converts cardNumber to String if not already string
	let cardNumberArray = card_Number.split(""); //converts string to array
	cardNumberArray = cardNumberArray.map((i) => Number(i)); //checks if all array elements are of type Number
	
    return checkLength(cardNumberArray) &&
		isEven(cardNumberArray) &&
		sum(cardNumberArray) &&
		ifSame(cardNumberArray) &&
		isNumber(cardNumberArray)
		? "Valid"
		: "Not Valid"; //return valid if credit card is valid or invalid if it is not
}

console.log(validateCreditCardNumber(["9999777788886000"]));
console.log(validateCreditCardNumber(["6666666666661666"]));
console.log(validateCreditCardNumber(["6666666666666661"]));
console.log(validateCreditCardNumber(["1111111111111110"]));
console.log(validateCreditCardNumber(["4444444444444444"]));
console.log(validateCreditCardNumber(["a92332119c011112"]));


