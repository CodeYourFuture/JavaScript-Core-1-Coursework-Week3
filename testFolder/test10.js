// function generateFibonacciSequence(n) {
//     arr = [0];
//     num = 1;
//     for (let i = 0; i < n - 1; i++) {
//         arr.push(num);
//         num = num + arr[i]; 
//     }
//     return arr;
// }


// console.log(generateFibonacciSequence(15))

function getHighestRatedInEachGenre(books) {
    let maxRate = ""     
    if (books.genre === "children") {
            maxRate = books.reduce((max, book) => max.votes > book.votes ? max : book )
         }
         return maxRate   
}

const BOOKS = [
    {
        title: "The Lion, the Witch and the Wardrobe",
        genre: "children",
        rating: 4.7
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        genre: "non-fiction",
        rating: 4.7
    },
    {
        title: "Nadiya's Fast Flavours",
        genre: "cooking",
        rating: 4.7
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        genre: "children",
        rating: 4.8
    },
    {
        title: "A Life on Our Planet",
        genre: "non-fiction",
        rating: 4.8
    },
    {
        title: "Dishoom: The first ever cookbook from the much-loved Indian restaurant",
        genre: "cooking",
        rating: 4.85
    },
    {
        title: "Gangsta Granny Strikes Again!",
        genre: "children",
        rating: 4.9
    },
    {
        title: "Diary of a Wimpy Kid",
        genre: "children",
        rating: 4.6
    },
    {
        title: "BOSH!: Simple recipes. Unbelievable results. All plants.",
        genre: "cooking",
        rating: 4.6
    },
    {
        title: "The Book Your Dog Wishes You Would Read",
        genre: "non-fiction",
        rating: 4.85
    },
]


getHighestRatedInEachGenre(BOOKS);
// console.log(BOOKS.length)