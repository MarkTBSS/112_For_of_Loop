Looping Arrays: The for-of Loop

8.1 Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.

```
let pageSum = 0;
```

8.2 Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.

Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).

```
const allAuthors = [];
```

8.3 Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.

Expected output

```
1. Robert Sedgewick
2. Kevin Wayne
3. Harold Abelson
   ... // part removed for clarity
4. Cal Newport
```

#Run

```
node script.js
node assignment.js
```
