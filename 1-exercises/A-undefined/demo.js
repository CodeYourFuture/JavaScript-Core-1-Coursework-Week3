function double(n) {
    return n * 2;
}
console.log(double(3)); 
console.log(double(5));


function doubleEachElement(arr) {
    let newArr = [];
    for(let element of arr) {
        let newValue = double(element);
        newArr.push(newValue);
    }
    return newArr;    
}


function triple(n) {
    return n * 3;
}
console.log(double(3)); 
console.log(double(5));

function tripleEachElement(arr) {
    let newArr = [];
    for(let element of arr) {
        let newValue = triple(element);
        newArr.push(newValue);
    }
    return newArr;    
}


function update(arr, func) {
    let newArr = [];
    for(let element of arr) {
        let newValue = func(element);
        newArr.push(newValue);
    }
    return newArr;    
}
let arr =[2, 3, 4];
let doublesValues = update(arr, double);
let tripleValues = update(arr, triple);
console.log(doublesValues);
console.log(tripleValues);

function double(n) {
    return n * 2;
}
update(arr, double);

function hello(teamMember) {
    console.log("Hello " + teamMember);
}
function notifyPeople(team) {
    for(teamMember of team) {
        hello(teamMember);
    }
}

notifyPeople(arr, hello)


function goodBye(teamMember) {
    console.log('Goodbye ' + teamMember);
}
    function notifyPeople(team, func ){
        for(teamMember of team) {
           func(teamMember);
     
        }
    }

notifyPeople(arr, goodBye);


let shoppingList = ['bananas', 'milk', 'bread'];
shoppingList.forEach(value => {
    console.log(`We need to buy ${value}`);
});

let data = [1, 2, 3, 4, 5];
let newArr = data.map(value =>  value * 2); 


console.log(newArr);
console.log(data);


let data1 = [1, 2, 3, 4, 5];
let evenNumbers = data.filter(value => {
    return value % 2 === 0});
console.log(evenNumbers);
console.log(data1);

let data2 = [1, 2, 3, 4, 5];
let firstEvenNumber = data.find(value => value % 2 === 0);
console.log(firstEvenNumber); 

let data3 = [1, 2, 3, 4, 5];
data
    .filter(value => value % 2 === 0)
    .map(value => value * 3)
    .forEach(value => console.log(value));



    let channels = ["bbc1", "BBC2", "ITV", "channel4", 
"Channel5", "bbc3", "bbc4", "itv2", "ITV3", "itv4"];
console.log(channels);

channels.map(channel => channel.toUpperCase)
let newChannel = channels.map(item => item.toUpperCase());
let itvChannel = newChannel.filter(item => item.includes('ITV'))
newChannel.forEach(item => console.log(item));
