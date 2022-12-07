/*
    This exercise includes an array of objects. You can read more about objects here: https://javascript.info/object

    Imagine you're working for an online store selling books (like Amazon).
    Below, we have an array of book objects.
    Each object contains the title of the book, the genre, and a rating based on user reviews.
    
    We want to find the title of the highest rated book in each genre to showcase on our home page.
    Implement a function which takes the array of books as a parameter, and returns an array of book titles.
    Each title in the resulting array should be the highest rated book in its genre.
*/

//1. Creating function - getting list of all unique genres
//2. Creating function - Getting highest rate in one genre
//3. Looping through the book array and adding to new array title with the highest rate

//returning list with unique genres
function getListOfGenres(books) {
  let genres = [];
  for (let book of books) {
    genres.push(book.genre);
  }
  return [...new Set(genres)];
}

//returning max rate of one genre
function getHighestRatedInOneGenre(books, genre) {
  let rateArray = [];

  for (let book of books) {
    if (book.genre === genre) {
      rateArray.push(book.rating);
    }
  }
  return Math.max(...rateArray);
}

function getHighestRatedInEachGenre(books) {
  let titles = [];
  let genres = getListOfGenres(books);
  for (let book of books) {
    for (let genre of genres) {
      if (
        book.rating === getHighestRatedInOneGenre(books, genre) &&
        book.genre === genre
      ) {
        titles.push(book.title);
      }
    }
  }
  return titles;
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
