/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.
  
    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring(). 
*/
// const findSafeOxygenLevel = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];

// input is  string array
//  output is returning string 

 function safeLevels(arr){
   const convert = arr.map(function(element){
      return parseFloat(element);
   });
     const safeLevels = convert.filter(function(element){
       return element > 19.5 && element < 23.5;
     });
      return `${safeLevels[0]}%`;
    }
//    return arr[2];
//  }
//  const oxygenLevel = "29.3%";
//  const number = oxygenLevel.split("%")
//  // console.log(Number(number[0]));//"24.2"
 
//  const num = Number(number[0])// 24.2
 
//    if((num > 19.5) && (num < 23.5 )){
//        console.log ("yes it is ")
  //  }
// const  safeLevel= findSafeOxygenLevel.substring(0,15);
 




/* ======= TESTS - DO NOT MODIFY ===== */

test("findSafeOxygenLevel function works - case 1", () => {
  expect(
    findSafeOxygenLevel(["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"])
  ).toEqual("19.9%");
});

test("findSafeOxygenLevel function works - case 2", () => {
  expect(
    findSafeOxygenLevel(["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"])
  ).toEqual("20.2%");
});

test("findSafeOxygenLevel function filters out invalid percentages", () => {
  expect(
    findSafeOxygenLevel(["200%", "-21.5%", "20", "apes", "21.1%"])
  ).toEqual("21.1%");
});

test("findSafeOxygenLevel function returns undefined if no valid plants found", () => {
  expect(findSafeOxygenLevel(["50"])).toBeUndefined();
});
