/*
    This exercise includes an array of objects. You can read more about objects here: https://javascript.info/object

    Imagine you're working for an online store selling books (like Amazon).
    Below, we have an array of book objects.
    Each object contains the title of the book, the genre, and a rating based on user reviews.
    
    We want to find the title of the highest rated book in each genre to showcase on our home page.
    Implement a function which takes the array of books as a parameter, and returns an array of book titles.
    Each title in the resulting array should be the highest rated book in its genre.
*/

// function getHighestRatedInEachGenre(books) {
//     let allBooks = books.map((books) => Object.assign(books));
//     return allBooks;
// }
// console.log(getHighestRatedInEachGenre(BOOKS));
/* ======= Book data - DO NOT MODIFY ===== */
const BOOKS = [{
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

// function category(books, genre) {
//     let children = [];
//     books.forEach((element) => {
//         if (element.genre === genre) {
//             children.push(element);
//         }
//     });
//     return children;
// }

// function operation(books, genre) {
//     let children = category(books, genre);
//     let result = children.sort((a, b) => b.rating - a.rating)[0];
//     return result.title;
// }

// function getHighestRatedInEachGenre(books) {
//     let children = operation(books, "children");
//     let non_fiction = operation(books, "non-fiction");
//     let cooking = operation(books, "cooking");
//     const result = [children, non_fiction, cooking];
//     return result;
// }
// console.log(getHighestRatedInEachGenre(BOOKS));
// getHighestRatedInEachGenre(BOOKS);

function arranGeenre(books, category) {
    const children = [];

    books.filter((value, index) => {
        if (value.genre === category) {
            children.push(value);
        }
    });
    let result = children.sort((a, b) => b.rating - a.rating);
    return result[0].title;
}

//💫 💫 💫 💫 💫 💫 💫 💫 💫 💫

function getHighestRatedInEachGenre(books) {
    let children = arranGeenre(books, "children");
    let non_fiction = arranGeenre(books, "non-fiction");
    let cooking = arranGeenre(books, "cooking");
    const result = [children, non_fiction, cooking];
    return result;
}
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