// objName = {};

// human = {
//   height: 175,
//   eyeColor: "brown",

//   think() {
//     console.log("yesna is thinking! ");
//   },
//   sleep() {
//     console.log("Siver is sleeping,be quite!");
//   },
//   eat() {
//     console.log("eat too much!");
//   },
// };

// console.log(human.eyeColor);
// human.sleep();

//TODO:  first you need check test parts to find what is input and output formats(typeOf)
//!input : ["soleimanie","tehran",""]
//!output: ["        ","        ","      "]
//TODO:  second you need to run pre-defined functions to find what is the outputs and how to use them!
// !let temp = temperatureService("London"); // =>  output: 10
// !console.log(temp);

// !//
// ! maybe at the future we need to use temp and do some thing , so we need to store it in some variable!
// !temp = temp +30;
// !console.log(temp);
//TODO: third thing you need to do is start coding!

function temperatureService(city) {
  let temparatureMap = new Map();

  temparatureMap.set("London", 10);
  temparatureMap.set("Paris", 12);
  temparatureMap.set("Barcelona", 17);
  temparatureMap.set("Dubai", 27);
  temparatureMap.set("Mumbai", 29);
  temparatureMap.set("São Paulo", 23);
  temparatureMap.set("Lagos", 33);

  return temparatureMap.get(city);
}

function getTemperatureReport(cities) { // defining a function
  let results = [];
  cities.forEach((city) => {
    let thisCityTemp = temperatureService(city);
    results.push(`The temperature in ${city} is ${thisCityTemp} degrees`);
  });
  // for change dynamically : ${}  + backTick ``
  // result is ready!
  return results;
}

// call functions:

let testCity = ["Paris", "Dubai"];
console.log(getTemperatureReport(testCity));
console.log(" this time we don't select city!");
console.log(getTemperatureReport([])); // we expect results array as empty array!

// let myCities = ["tehran","soleimanie"];
// getTemperatureReport(myCities); /// cities : is same mycities

// Trace :

/*
line 61:  testCity = ["Paris", "Dubai"]
line 62:  getTemeratureReort( parameter : testCity)  =>  getTemeratureReort(["Paris", "Dubai"]) => JS is jump up to line 48!
line 48:  Js is looking at what getTemperatureReport does with cities parameter!  => JS is going down to line 49!
line 49:  results = [] empty array! => JS is going down to line 50!
line 50:  JS has to do a foreach on parameter of getTemeperatureRepot call! which was in line 62! => parameter:testCity:["Paris", "Dubai"]

! JS want to show you what will happen with forEach in line 50:
!["Paris", "Dubai"].forEach( (city) => {
line 51
!}

!)
!=>
!paris => {JS will run every lines in foreach for paris}


! Hint : JS has run line 50 and is going to run line 51!
line 51: let thisCityTemp = temperatureService(city);
! paris : city => thisCityTemp = temperatureService(paris) ! It's call of new function => which was in line 34!
! line 34 to line 46 is running here: tempetureService(paris) : 12   => thisCityTemp is 12 =>
line 52: results.push(`The temperature in ${city} is ${thisCityTemp} degrees`);
! results was empty array! => [].push(`The temperature in ${city} is ${thisCityTemp} degrees`) => city:paris, thisCityTemp:12
! results will be : ["the temperature in paris is 12 degrees"]

!Dubai => {JS will run every lines in foreach for Dubai}


! Hint : JS has run line 50 and is going to run line 51!
line 51: let thisCityTemp = temperatureService(city);
! Dubai : city => thisCityTemp = temperatureService(Dubai) ! It's call of new function => which was in line 34!
! line 34 to line 46 is running here: tempetureService(Dubai) : 27   => thisCityTemp is 27 =>
line 52: results.push(`The temperature in ${city} is ${thisCityTemp} degrees`);
! results was empty array! => ["the temperature in paris is 27 degrees"].push(`The temperature in ${city} is ${thisCityTemp} degrees`) => city:Dubai, thisCityTemp:12
! results will be : ["the temperature in paris is 12 degrees","the temperature in Dubai is 27 degrees"]

? now lines 50 to 53 [hint: the same foreach] is ran! and lines 54 and 55 is comments ! so JS will go to run line 56.

line 56: return results : JS will go to it's memory to find what was result!
! ["the temperature in paris is 12 degrees","the temperature in Dubai is 27 degrees"]

line 57: } // OH JS will understand running getTemperetureReport function is finished! =>
? so JS will comeback to the line where this function was called!
? look at line 73 to find it ! it was called in line 62 => so now JS is going to run line 62:

! Now JS just will print the result! [ hint: because it want to run console.log() to print output of getTemperetureReport function ]
! It will print ["the temperature in paris is 12 degrees","the temperature in Dubai is 27 degrees"]]
line 63: console.log(" this time we don't select city!");
! It will print : this time we don't select city!
line 64: console.log(getTemperatureReport([]));
! JS needs to run getTemperatureReport([]) and after that it will print the result!
! JS will jump to where getTemperatureReport() is defined! => it was in line: 48

line 48: function getTemperatureReport(cities) { 
  ! it is just defining this function => JS will go to line 49:
  ! cities the input of this function will be []
line 49: let results = [];
! results = [];
line 50: cities.forEach((city) => {
  ! JS will run [].forEach((city) => {} 
  ! because [].forEach(){} does'nt make sense = > so it will jump to after foreach finished that was in line 53! =>
  ! Hint: so result is not changed and still it is empty array.
  ? lines 54 and 55 are comments! so it will go to line 56:
line 56: return results; => 
!an empty array will returned => line 57 :
line 57: } =>
! JS will find that this function is finished!
! what will happen? 
! JS will jump back to the line which this function was called!
! JS will come back in line 64 : console.log([]); 
! JS will print []. => jS is going to line 65! =>
line 65 ! JS will find nothing to run! 

TODO : Congradulation you just finished what computer did in less than one second in hours!







*/














//

// Array = {
//   let length : this,
//   forEach(){

//   },
//   map(){

//   },
//   push(){

//   },
//   filter(){

//   }

// }

// numbers = [10, 20, 30, 14, 10];
// //      = [0, 1 ,2,  3, 4];
// let sum = 0;
// numbers.forEach((num) => {
//   sum = sum + num;
//   console.log(sum);
// });

// use Ctrl + D to change all similar names!

/*
numbers = [10, 20, 30, 14, 10]
sum = 0 

num : 10    =>     0 + 10 = 10
num : 20    =>     10 + 20 = 30
num : 30    
num : 14
num : 10    =>     74 + 10 = 84





*/

/*
arrayName.foreach(
  (parameters)=>{
    do something with parameters

  }
)


*/

// function addNum(parameters){
//  // what this function do
// }

// (parameters) => { what this function do!}

// add
// let i = 0;
// let sum = 0;
// while (i < numbers.length) {
//   sum = sum + numbers[i];
//   console.log(sum);
//   i +=1;
// }

/* Trace:
i+=1 : i++ : i=i+1
i = 0 => sum = 0 , true (i<length): (0<5) => numbers[i]: numbers[0]: 1  => sum = 0 +1 =1 =>next turn:
i = 1 => sum = 1 , true .. : (1<5)        => numbers[i]: numbers[1]: 2  => sum = 1 + 2 =3 =>next turn:
i = 2 => sum = 3 , true : (2<5)           => numbers[i]: numbers[2]: 3  => sum = 3 + 3 = 6=>...



i = 6
*/
