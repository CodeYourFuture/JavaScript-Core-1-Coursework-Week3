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
  // TODO

  let highestValueArray = [];
  let genreChildrenArray = [];
  let genreNonFictionArray = [];
  let genreCookingArray = [];

  // books.forEach(element => element.);

  books.forEach((element) => {
    if (element.genre === "children") {
      genreChildrenArray.push(element);
    } else if (element.genre == "cooking") {
      genreCookingArray.push(element);
    } else {
      genreNonFictionArray.push(element);
    }
  });

    genreChildrenArray.sort((r1, r2) => 
        r1 < r2 ? 1 :  (r1.rating > r2.rating) ? -1 : 0
    ); 

    genreCookingArray.sort((r1, r2) =>
      r1 < r2 ? 1 : r1.rating > r2.rating ? -1 : 0
    ); 

    genreNonFictionArray.sort((r1, r2) =>
      r1 < r2 ? 1 : r1.rating > r2.rating ? -1 : 0
    ); 

    highestValueArray.push(genreChildrenArray[0].title);
    highestValueArray.push(genreCookingArray[0].title);
    highestValueArray.push(genreNonFictionArray[0].title);

  console.log(highestValueArray);
  return highestValueArray;
}

/* ======= Book data - DO NOT MODIFY ===== */
const BOOKS = [
  {
    title: "The Lion, the Witch and the Wardrobe",
    genre: "children",
    rating: 4.7,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "non-fiction",
    rating: 4.7,
  },
  {
    title: "Nadiya's Fast Flavours",
    genre: "cooking",
    rating: 4.7,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "children",
    rating: 4.8,
  },
  {
    title: "A Life on Our Planet",
    genre: "non-fiction",
    rating: 4.8,
  },
  {
    title:
      "Dishoom: The first ever cookbook from the much-loved Indian restaurant",
    genre: "cooking",
    rating: 4.85,
  },
  {
    title: "Gangsta Granny Strikes Again!",
    genre: "children",
    rating: 4.9,
  },
  {
    title: "Diary of a Wimpy Kid",
    genre: "children",
    rating: 4.6,
  },
  {
    title: "BOSH!: Simple recipes. Unbelievable results. All plants.",
    genre: "cooking",
    rating: 4.6,
  },
  {
    title: "The Book Your Dog Wishes You Would Read",
    genre: "non-fiction",
    rating: 4.85,
  },
];

/* ======= TESTS - DO NOT MODIFY ===== */
test("should return the highest rated book in each genre", () => {
  expect(new Set(getHighestRatedInEachGenre(BOOKS))).toEqual(
    new Set([
      "The Book Your Dog Wishes You Would Read",
      "Gangsta Granny Strikes Again!",
      "Dishoom: The first ever cookbook from the much-loved Indian restaurant",
    ])
  );
});
