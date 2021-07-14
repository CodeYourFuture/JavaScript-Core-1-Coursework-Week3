// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function multiplyBy100 (number){
return number*100;

}

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let newArray =numbers.map(multiplyBy100) ;

console.log(newArray);


 newArray =numbers.map(function multiplyBy100 (number){
    return number*100;
    
    } ) ;
    console.log(newArray);



 newArray =numbers.map(function  (number){
    return number*100;
    
    } ) ;
    console.log(newArray);


 newArray =numbers.map ( number => number*100 ) 
    console.log(newArray);