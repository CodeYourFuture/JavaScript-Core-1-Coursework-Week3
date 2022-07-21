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

function getHighestRatedInEachGenre(books) {
  // TODO
  let children = [];
  let cooking = [];
  let nonFiction = [];
  let rating = [];
  let newRating = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].genre === "children") {
      children.push(books[i]);
    } else if (books[i].genre === "cooking") {
      cooking.push(books[i]);
    } else {
      nonFiction.push(books[i]);
    }
  }
  childrenRating = Object.keys(children).reduce(
    (acc, curr) =>
      acc.rating
        ? children[curr].rating > acc.rating
          ? children[curr]
          : acc
        : children[curr],
    {}
  );
  cookingRating = Object.keys(cooking).reduce(
    (acc, curr) =>
      acc.rating
        ? cooking[curr].rating > acc.rating
          ? cooking[curr]
          : acc
        : cooking[curr],
    {}
  );
  nonFictionRating = Object.keys(nonFiction).reduce(
    (acc, curr) =>
      acc.rating
        ? nonFiction[curr].rating > acc.rating
          ? nonFiction[curr]
          : acc
        : nonFiction[curr],
    {}
  );

  let newCookingRating = Object.keys(cookingRating).map(function (key) {
    return cookingRating[key];
  });
  let newChildrenRating = Object.keys(childrenRating).map(function (key) {
    return childrenRating[key];
  });
  let newNonFictionRating = Object.keys(nonFictionRating).map(function (key) {
    return nonFictionRating[key];
  });

  rating = newNonFictionRating[0].concat(
    ",",
    newChildrenRating[0],
    ",",
    newCookingRating[0]
  );

  newRating = rating.split(",");

  return newRating;
}

arra = getHighestRatedInEachGenre(BOOKS);

console.log(arra);
