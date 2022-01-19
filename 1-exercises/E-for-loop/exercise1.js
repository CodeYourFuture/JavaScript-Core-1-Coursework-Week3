/*
    for loops can be useful when we already know exactly how many times we want to loop.

    Change the while loop below into a for loop.
*/

// Change the below code to use a for loop instead of a while loop.
// let i = 0;
// while (i < 26) {
//   console.log(String.fromCharCode(97 + i));
//   i++;
// }
// The output shouldn't change.

// asci code i < 26 charcode https://en.wikipedia.org/wiki/List_of_Unicode_characters
// unicode has all letters

for (let i = 0; i < 26; i++) {
  console.log(String.fromCharCode(97 + i));
}
