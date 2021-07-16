const number1 = [9999777788880000];
const number2 = 6666666666661666;
const number3 = "a92332119c011112";
const number4 = 4444444444444444;
const number5 = 1111111111111110;
const number6 = 6666666666666661;

const spliting = number1.toString().split("");

function cardValidator(cardNumber) {
  let validCardNumber = cardNumber.map((element, i) => {
    let isNumber = /^\d+$/;
    let isEven = cardNumber.lastIndexOf(element % 2 === 0);

    let isUnique = cardNumber.indexOf(element) != i;

    if (
      cardNumber.length === 16 &&
      isUnique == true &&
      isEven === true &&
      sum > 16 &&
      cardNumber === isNumber
    ) {
      return true;
    } else {
      return false;
    }
  });
  let sum = += cardNumber;
  return sum;
}

console.log(cardValidator(number1));
//reduce((a, b) => a + b);