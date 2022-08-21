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
  let childrenBooks = [];
  for (const book of books) {
    // In this loop I filtered children books, and add their title and rate in a array.[title,rate,title,rate....]
    if (book.genre === "children") {
      childrenBooks.push(book.title);
      childrenBooks.push(book.rating);
    }
  }
  for (const book of childrenBooks) {
    let ratings = [];
    var childrenHighestRatedBook = [];
    for (i = 1; i < childrenBooks.length; i += 2) {
      // In this loop I put all rates in a array
      ratings.push(childrenBooks[i]);
    }
    let highestRate = Math.max(...ratings); // I found the highest rate in ratings array
    for (i = 0; i < childrenBooks.length; i++) {
      // I checked every item in the [title,rate,title...] array to match the highestRate and then
      // pushed the title of that rate (index of titles are 1 less than rates) to a var
      if (childrenBooks[i] === highestRate) {
        childrenHighestRatedBook.push(childrenBooks[i - 1]);
      }
    }
  }

  let nonFictionBooks = [];
  for (const book of books) {
    // Same Method for other books.
    if (book.genre === "non-fiction") {
      nonFictionBooks.push(book.title);
      nonFictionBooks.push(book.rating);
    }
  }
  for (const book of nonFictionBooks) {
    let ratings = [];
    var nonFictionHighestRatedBook = [];
    for (i = 1; i < nonFictionBooks.length; i += 2) {
      ratings.push(nonFictionBooks[i]);
    }
    let highestRate = Math.max(...ratings);
    for (i = 0; i < nonFictionBooks.length; i++) {
      if (nonFictionBooks[i] === highestRate) {
        nonFictionHighestRatedBook.push(nonFictionBooks[i - 1]);
      }
    }
  }

  let cookingBooks = [];
  for (const book of books) {
    // Same Method for other books.
    if (book.genre === "cooking") {
      cookingBooks.push(book.title);
      cookingBooks.push(book.rating);
    }
  }
  for (const book of cookingBooks) {
    let ratings = [];
    var cookingHighestRatedBook = [];
    for (i = 1; i < cookingBooks.length; i += 2) {
      ratings.push(cookingBooks[i]);
    }
    let highestRate = Math.max(...ratings);
    for (i = 0; i < cookingBooks.length; i++) {
      if (cookingBooks[i] === highestRate) {
        cookingHighestRatedBook.push(cookingBooks[i - 1]);
      }
    }
  }
  let heighestRatedBooks = [
    nonFictionHighestRatedBook[0],
    childrenHighestRatedBook[0],
    cookingHighestRatedBook[0],
  ];
  return heighestRatedBooks;
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
