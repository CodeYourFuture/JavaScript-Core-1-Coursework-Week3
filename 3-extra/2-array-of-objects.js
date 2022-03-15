/*
    This exercise includes an array of objects. You can read more about objects here: https://javascript.info/object

    Imagine you're working for an online store selling books (like Amazon).
    Below, we have an array of book objects.
    Each object contains the title of the book, the genre, and a rating based on user reviews.
    
    We want to find the title of the highest rated book in each genre to showcase on our home page.
    Implement a function which takes the array of books as a parameter, and returns an array of book titles.
    Each title in the resulting array should be the highest rated book in its genre.
*/

let higherRatedBook = []
let higherRate = 0;
let genreArray = []

// function to collect all the unique genres in the object and add it to the genreArray
function createGenreArray(availableBooks) {
    
    for (let everyBook of availableBooks) {
        if (!genreArray.includes(everyBook.genre)) {
            genreArray.push(everyBook.genre)
        }
    }
    return genreArray
}

function getHighestRatedInEachGenre(books) {
    const allAvailableGenres = createGenreArray(books)
    
    
    
    // let highestRating;
    let highestRatedBooksArr = [];
    
    for (let i = 0; i<allAvailableGenres.length; i++) {
        let higherRating = 0 //to catch the highest rated book in a genre
        let highestRatedTitle = "" //to catch the title of the highest rated book in a genre
        for (let book of books) {
            
            if (allAvailableGenres[i] === book.genre) {
                
                if (higherRating < book.rating) {
                    higherRating = book.rating; // higher rating changes every time it finds the higher rating in a genre
                    highestRatedTitle = book.title // similarly, title changes for the higher rated book in a genre
                    
                    
                }
            
                
            }
            
        }
        highestRatedBooksArr.push(highestRatedTitle)
        
    }
    return highestRatedBooksArr
}


/* ======= Book data - DO NOT MODIFY ===== */
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


/* ======= TESTS - DO NOT MODIFY ===== */
test("should return the highest rated book in each genre", () => {
    expect(new Set(getHighestRatedInEachGenre(BOOKS))).toEqual(new Set(
        [
            "The Book Your Dog Wishes You Would Read",
            "Gangsta Granny Strikes Again!",
            "Dishoom: The first ever cookbook from the much-loved Indian restaurant"
        ]
    ));
});