"use strict";

// Example books array
const books = [
    { title: "Book 1", pages: 200, author: "Author 1" },
    { title: "Book 2", pages: 150, author: ["Author 2", "Author 3"] },
    { title: "Book 3", pages: 300, author: "Author 4" },
    { title: "Book 4", pages: 250, author: "Author 5" }
];

//8.1
let pageSum = 0;

for (let book of books) {
    pageSum += book.pages;
}

//8.2
const allAuthors = [];
for (const book of books) {
    if (typeof book.author === "string") {
        allAuthors.push(book.author);
    } else {
        for (const author of book.author) {
            allAuthors.push(author);
        }
    }
}

//8.3
for (const [index, author] of allAuthors.entries()) {
    console.log(`${index + 1}. ${author}`);
}
