/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.
  
    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.
    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.
    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%
    Some string methods that might help you here are .replace() and .substring(). 
*/

function findSafeOxygenLevel(oxygen) {
   let numberToConvert=oxygen.map(function(numberFoundInArray){
     return parseFloat(numberFoundInArray);
   })
  
   let filterEachNumber= numberToConvert.filter(numberInArray => numberInArray > 19.5 && numberInArray < 23.5);
   return `${filterEachNumber[0]}%`;

}

/* ======= TESTS - DO NOT MODIFY ===== */

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"];
const oxygenLevels3 = ["200%", "21.1%"];

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("findSafeOxygenLevel function works - case 1", findSafeOxygenLevel(oxygenLevels1), "19.9%");

test("findSafeOxygenLevel function works - case 2", findSafeOxygenLevel(oxygenLevels2), "20.2%");

test("findSafeOxygenLevel function works - case 3", findSafeOxygenLevel(oxygenLevels3), "21.1%");