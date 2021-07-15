// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//Map1 creates function outside of .map(). It is called inside .map() later
function timesBy100(number) {
    return number * 100;
}

var map1 = numbers.map(timesBy100);

//Map2 creates and calls function inside .map()
var map2 = numbers.map(function timesBy100 (number) {
        return number * 100;
});

//Creates anonymous function to be called inside .map()
var map3 = numbers.map(function(number) {
    return number * 100
});

//function keyword not needed as using arrow functions
var map4 = numbers.map(number => {
    return number * 100
});

//curly bracket and return keyword not needed either
var map5 = numbers.map(number => number * 100);

console.log(map1);
console.log(map2);
console.log(map3);
console.log(map4);
console.log(map5);
