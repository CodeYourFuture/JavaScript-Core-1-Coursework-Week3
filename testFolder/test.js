function evenNumbers(n) {
    let i = 0;
    let arr = [];
    while (i < n * 2) {        
        if (i % 2 === 0) {
            arr.push(i);                        
        } 
        i++;       
    }
    console.log(arr);
}

evenNumbers(10);