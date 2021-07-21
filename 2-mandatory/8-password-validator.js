/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

We have supplied functions which will help you with some of these checks.

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/
var validatePasswordsArr =[]

function validatePasswords(passwords) {

  var newArr = passwords.forEach(function(element,index){
    if ((element.length >= 5) && (containsUppercaseLetter(element) === true) && (containsLowercaseLetter(element) === true) && (containsNumber(element) === true) && (containsSymbol(element) === true)) {
      validatePasswordsArr.push(true);
    } else {
      validatePasswordsArr.push(false);
    }
  })
  return validatePasswordsArr;
};

console.log(validatePasswords([
      "Se%5",
      "TktE.TJTU",
      "384#HsHF",
      "dvyyeyy!5",
      "tryT3729",
    ]));

// Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
  //return /[A-Z]/.test(string);,
  var capitalString = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  
  for (let i=0; i < capitalString.length; i++) {
    if (string.includes(capitalString[i])) {
      return true;
    } 
  }
}

console.log(containsUppercaseLetter("helwWow"));


// Returns true if string contains at least one lowercase letter.
function containsLowercaseLetter(string) {
  //return /[a-z]/.test(string);
  var lowerString = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  
  for (let i=0; i < lowerString.length; i++) {
    if (string.includes(lowerString[i]) === true) {
      return true;
    }
  }
}

console.log(containsLowercaseLetter("HELLO0Oo"));


// Returns true if string contains at least one number.
function containsNumber(string) {
  //return /[0-9]/.test(string);
  var numberString = [0,1,2,3,4,5,6,7,8,9]
  
  for (let i=0; i < numberString.length; i++) {
    if (string.includes(numberString[i]) === true) {
      return true;
    }
  }
}

console.log(containsNumber("h"));


// Returns true if string contains at least one symbol.
function containsSymbol(string) {
  //return /[!#$%.*&]/.test(string);
   var symbolString = ["!", "#", "$", "%", ".", "*", "&"]
  
  for (let i=0; i < symbolString.length; i++) {
    if (string.includes(symbolString[i]) === true) {
      return true;
    }
  }
}
console.log(containsSymbol("h"));
/* ======= TESTS - DO NOT MODIFY ===== */

test("Example 1", () => {
  expect(
    validatePasswords([
      "Se%5",
      "TktE.TJTU",
      "384#HsHF",
      "dvyyeyy!5",
      "tryT3729",
    ])
  ).toEqual([false, false, true, false, false]);
});

test("Example 2", () => {
  expect(
    validatePasswords([
      "StUFf27%",
      "Pl3nty!",
      "Jai33",
      "shajsaUA**&&",
      "Pl3nty!",
    ])
  ).toEqual([true, true, false, false, false]);
});
