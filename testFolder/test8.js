function generateRandomNumber() {
    console.log("Generating number...");
    return Math.round(Math.random() * 100);
}

function getRandomNumberGreaterThan50() {
    let i = 0;
    let arr = [];
    do {
        arr.push(generateRandomNumber());        
        if (arr[i] > 50) {
            arr = arr[i];
        }
        i++;
    }
    while (i <= arr.length);
    return arr
}

console.log(getRandomNumberGreaterThan50());