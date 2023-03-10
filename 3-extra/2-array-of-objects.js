/*
    This exercise includes an array of objects. You can read more about objects here: https://javascript.info/object

    Imagine you're working for an online store selling books (like Amazon).
    Below, we have an array of book objects.
    Each object contains the title of the book, the genre, and a rating based on user reviews.
    
    We want to find the title of the highest rated book in each genre to showcase on our home page.
    Implement a function which takes the array of books as a parameter, and returns an array of book titles.
    Each title in the resulting array should be the highest rated book in its genre.
*/

function getHighestRatedInEachGenre(books) {
  let arrOfCookingBooks = []
  let arrOfChildrenBooks = []
  let arrayOfNonFictionBooks = []
  let result = []

    let cookingBook = books.map(cookingBook => {
      if (cookingBook.genre === "cooking"){
        arrOfCookingBooks.push(cookingBook)
      }
    });
    let bestCookingBook = arrOfCookingBooks.reduce( 
      (b1, b2) => { 
        return b1.rating > b2.rating ? b1 : b2
      }
      );

      result.push(bestCookingBook.title)

    let childrenBook = books.map(childrenBook => {
      if (childrenBook.genre === "children"){
        arrOfChildrenBooks.push(childrenBook)
      }
    });
    let bestCildrenBook = arrOfChildrenBooks.reduce( 
      (b1, b2) => { 
        return b1.rating > b2.rating ? b1 : b2
      }
      );

      result.push(bestCildrenBook.title)

      let nonFictionBook = books.map(nonFictionBook => {
      if (nonFictionBook.genre === "non-fiction"){
        arrayOfNonFictionBooks.push(nonFictionBook)
      }
    });
    let bestNonFictionBook = arrayOfNonFictionBooks.reduce( 
      (b1, b2) => { 
        return b1.rating > b2.rating ? b1 : b2
      }
      );

     result.push(bestNonFictionBook.title)

    return  result
  
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