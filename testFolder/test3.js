function generateRandomNumber() {
    console.log("Generating number...");
    return Math.round(Math.random() * 100);
}

function getRandomNumberGreaterThan50() {
//     let result;
//     let i = 0;
//     do { if (generateRandomNumber() > 50) {
//         return generateRandomNumber() >50}
//          i++;
          
//     }   
//     while ( getRandomNumberGreaterThan50() > 50);
//     return getRandomNumberGreaterThan50()
// 
return generateRandomNumber() + 50;

}



console.log(getRandomNumberGreaterThan50())