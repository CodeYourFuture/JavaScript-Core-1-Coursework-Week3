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
  const highestRatedInEachGenre = [];
  const genres = [];
  for (let i = 0; i < books.length; i++) {
    if (!genres.includes(books[i].genre)) {
      genres.push(books[i].genre);
    }
  }
  for (let i = 0; i < genres.length; i++) {
    let highestRatedBook = null;
    for (let j = 0; j < books.length; j++) {
      if (books[j].genre === genres[i]) {
        if (highestRatedBook === null) {
          highestRatedBook = books[j];
        } else if (books[j].rating > highestRatedBook.rating) {
          highestRatedBook = books[j];
        }
      }
    }
    highestRatedInEachGenre.push(highestRatedBook.title);
  }
  return highestRatedInEachGenre;
}

/* ======= Book data - DO NOT MODIFY ===== */
const BOOKS = [
  {
    title: 'The Lion, the Witch and the Wardrobe',
    genre: 'children',
    rating: 4.7,
  },
  {
    title: 'Sapiens: A Brief History of Humankind',
    genre: 'non-fiction',
    rating: 4.7,
  },
  {
    title: "Nadiya's Fast Flavours",
    genre: 'cooking',
    rating: 4.7,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: 'children',
    rating: 4.8,
  },
  {
    title: 'A Life on Our Planet',
    genre: 'non-fiction',
    rating: 4.8,
  },
  {
    title: 'Dishoom: The first ever cookbook from the much-loved Indian restaurant',
    genre: 'cooking',
    rating: 4.85,
  },
  {
    title: 'Gangsta Granny Strikes Again!',
    genre: 'children',
    rating: 4.9,
  },
  {
    title: 'Diary of a Wimpy Kid',
    genre: 'children',
    rating: 4.6,
  },
  {
    title: 'BOSH!: Simple recipes. Unbelievable results. All plants.',
    genre: 'cooking',
    rating: 4.6,
  },
  {
    title: 'The Book Your Dog Wishes You Would Read',
    genre: 'non-fiction',
    rating: 4.85,
  },
];
getHighestRatedInEachGenre(BOOKS);

/* ======= TESTS - DO NOT MODIFY ===== */
test('should return the highest rated book in each genre', () => {
  expect(new Set(getHighestRatedInEachGenre(BOOKS))).toEqual(
    new Set([
      'The Book Your Dog Wishes You Would Read',
      'Gangsta Granny Strikes Again!',
      'Dishoom: The first ever cookbook from the much-loved Indian restaurant',
    ])
  );
});
