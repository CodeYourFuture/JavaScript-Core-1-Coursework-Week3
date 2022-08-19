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

//store title and rate by genre category into separate arrays.
  let genreChildren = [];
  let genreNonFiction = [];
  let genreCooking = [];


  for (let i = 0; i < books.length; i++) {
    if (books[i].genre === "children") {
      if (genreChildren.length !== 0) {
        genreChildren[genreChildren.length] = {
          title: books[i].title,
          rating: books[i].rating,
        };
      } else {
        genreChildren[0] = { title: books[i].title, rating: books[i].rating };
      }
    } else if (books[i].genre === "non-fiction") {
      if (genreNonFiction.length !== 0) {
        genreNonFiction[genreNonFiction.length] = {
          title: books[i].title,
          rating: books[i].rating,
        };
      } else {
        genreNonFiction[0] = { title: books[i].title, rating: books[i].rating };
      }
    } else if (books[i].genre === "cooking") {
      if (genreCooking.length !== 0) {
        genreCooking[genreCooking.length] = {
          title: books[i].title,
          rating: books[i].rating,
        };
      } else {
        genreCooking[0] = { title: books[i].title, rating: books[i].rating };
      }
    }
  }
  // find the highest rate books by category and store it into another array
  let hightestRateBookTitles = [];
  let indexOfHighestRate = 0;

  let rate = genreNonFiction[0].rating;
  for (let i = 1; i < genreNonFiction.length; i++) {
    if (genreNonFiction[i].rating > rate) {
      rate = genreNonFiction[i].rating;
      indexOfHighestRate = i;
    }
  }
  hightestRateBookTitles[0] = {
    title: genreNonFiction[indexOfHighestRate].title,
    rate: genreNonFiction[indexOfHighestRate].rating,
  };

  rate = genreChildren[0].rating;
  for (let i = 1; i < genreChildren.length; i++) {
    if (genreChildren[i].rating > rate) {
      rate = genreChildren[i].rating;
      indexOfHighestRate = i;
    }
  }
  hightestRateBookTitles[1] = {
    title: genreChildren[indexOfHighestRate].title,
    rate: genreChildren[indexOfHighestRate].rating,
  };

  rate = genreCooking[0].rating;
  for (let i = 1; i < genreCooking.length; i++) {
    if (genreCooking[i].rating > rate) {
      rate = genreCooking[i].rating;
      indexOfHighestRate = i;
    }
  }
  hightestRateBookTitles[2] = {
    title: genreCooking[indexOfHighestRate].title,
    rate: genreCooking[indexOfHighestRate].rating,
  };

  //store only titles into another array and return it.

  let output = [];
  for(let i = 0 ;i<hightestRateBookTitles.length;i++)
  output[i]=hightestRateBookTitles[i].title;

  

  return output;
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
console.log(getHighestRatedInEachGenre(BOOKS));
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
