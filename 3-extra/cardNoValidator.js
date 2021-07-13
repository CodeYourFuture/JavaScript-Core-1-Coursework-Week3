// check all array (becaming from number)
function isOnlyNumber (array){
  return array.every(element => {
    return Number.isInteger(element);
  });
}
//check array length has to be 16 digit 
//if it is => also check isOnlyNumber (for the next steps)
function isArray16DigitAndOnlyNumber(array){
  return (array.length === 16) && isOnlyNumber(array);
}
//check all array = at least 1 number has to be different
function isDifferentNumber(array){
  const firstNumber=array[0];
  return array.some(element => {
    return element !== firstNumber;
    //if at least one element different from first element = kart number not the sam
  });
}

//sum of all numbers have to bigger than 16
function isSumBiggerThan16(array){
  let sum=0;
  array.forEach(element => {
    sum+=element;
  });
  return sum > 16;
}
//check last number of array, it has to be even number
function isFinalNumberEven (array){
  return array[array.length-1] % 2 === 0;
}


// take a 'string' as a parameter and 
//convert to integer
//add each character of them to the array
function putInsideArray (str){
  const elementArray =[];
  for(let i = 0; i < str.length; i++){
    const eachCharacter = str.charAt(i);
    elementArray.push(parseInt(eachCharacter));
  }
  return elementArray;
}




////  =**********************
//Create validator 
//put inside an array
//check everyting
//return answer

function isCardNumberValid(str){
  const arrayNumbers = putInsideArray(str);
  return isArray16DigitAndOnlyNumber(arrayNumbers) && isDifferentNumber(arrayNumbers) && isSumBiggerThan16(arrayNumbers) && isFinalNumberEven(arrayNumbers);
}

///npm run extra-tests

/*============MY OWN TESTS ==============*/
const card1 ="444444444484844";// false not 16 digit
const card2 ='9999777788880000'; //true
const card3 = '6666666666661666';//true
const card4 ='a92332119c011112' // (invalid characters)
const card5 ='4444444444444444' // (only one type of number)
const card6 ='1111111111111110' // (sum less than 16)
const card7 ='6666666666666661' // (odd final number)


test("Card validator - case 1", () => {
  expect(isCardNumberValid(card1)).toEqual(false);
});
test("Card validator - case 2", () => {
  expect(isCardNumberValid(card2)).toEqual(true);
});
test("Card validator - case 3", () => {
  expect(isCardNumberValid(card3)).toEqual(true);
});
test("Card validator - case 4", () => {
  expect(isCardNumberValid(card4)).toEqual(false);
});
test("Card validator - case 5", () => {
  expect(isCardNumberValid(card5)).toEqual(false);
});
test("Card validator - case 6", () => {
  expect(isCardNumberValid(card6)).toEqual(false);
});
test("Card validator - case 7", () => {
  expect(isCardNumberValid(card7)).toEqual(false);
});

