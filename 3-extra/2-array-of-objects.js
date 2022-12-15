/*
    This exercise includes an array of objects. You can read more about objects here: https://javascript.info/object

    Imagine you're working for an online store selling books (like Amazon).
    Below, we have an array of book objects.
    Each object contains the title of the book, the genre, and a rating based on user reviews.
    
    We want to find the title of the highest rated book in each genre to showcase on our home page.
    Implement a function which takes the array of books as a parameter, and returns an array of book titles.
    Each title in the resulting array should be the highest rated book in its genre.
*/
/*
//question on why sort worked backward here?

*/ /*
function getHighestRatedInEachGenre(books) {
  // TODO
  //sort the books array by the object keys
  let newArr = [...books].sort((a, b) => a.rating - b.rating);
  //sort highest to lowest  // access and return the 1st index of the array
  //loop over the books object
  //
  return newArr.map((e) => e.title);
}
*/

function compare(a, b) {
  if (a.rating > b.rating) {
    return -1;
  }
  if (a.rating < b.rating) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

function getHighestRatedInEachGenre(items) {
  //console.log(items);
  //let arr = [...items]; creates shallow copy

  // TODO
  //sort the books array by the object keys
  let qnewArr = [...items].sort(compare);
  //without providing a compare funtion sort() sorts the items in the wrong order
  // let qnewArr = items.sort((a, b) => a.rating - b.rating);
  //console.log(qnewArr);
  //sort highest to lowest  // access and return the 1st index of the array
  //loop over the books object to and return tiltes
  //
  let test = qnewArr.map((e) => e.title);
  return test;
}
/*
note , need to filter by gener 
array push if it meets an if cndition 
push to three seperatat arrays 
run sort on each array
push array[0] to a seperate array
return the array
*/
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
    title: "Dishoom: The first ever cookbook from the much-loved Indian restaurant",
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
