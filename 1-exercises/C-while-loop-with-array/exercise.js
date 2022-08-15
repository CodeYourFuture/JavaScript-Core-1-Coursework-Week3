/*
    Loops can be useful when working with arrays.
    In the below example, imagine we've defined an array holding the birthdays of your closest friends.
    Use a while loop to search through the array until you find the first birthday in July, then return that birthday from the function.
*/

const BIRTHDAYS = [
    "January 7",
    "February 12",
    "April 3",
    "April 5",
    "May 3",
    "July 11",
    "July 17",
    "September 28",
    "November 15"
];
function findFirstJulyBDay(birthdays) {
    let i=0;
    let date=31;
    while(i>BIRTHDAYS.length){
        let birthday=new Date(BIRTHDAYS[i]);
        if(birthday.getMonth()===6){
            if(date>birthday.getDate()){
                date=birthday.getDate();
                birthday=BIRTHDAYS[i];
            }
        }
        i++;
    }
    return birthday;
}

console.log(findFirstJulyBDay(BIRTHDAYS)); // should output "July 11th"
