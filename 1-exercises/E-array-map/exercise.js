// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//Syntax 1 : Function is outside the map method
function multiplyBy100(number){
    return number * 100;
}

var numbersTimes100 = numbers.map(multiplyBy100);

//Syntax 2 : Function is inside the map method
var numbersTimes100 = numbers.map(function multiplyBy100(number){
    return number * 100;
});

//Syntax 3 : Function is inside the map method and is anonymous
var numbersTimes100 = numbers.map(function (number){
    return number * 100;
});

//Syntax 4 : Arrow function is used
var numbersTimes100 = numbers.map(number => {
    return number * 100;
});

//Syntax 4 : return keyword is omitted from the arrow function
var numbersTimes100 = numbers.map(number => number * 100);
