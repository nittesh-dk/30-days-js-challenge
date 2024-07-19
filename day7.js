
// **Day 7: Objects**

// **Activity 1: Object Creation and Access**

// - Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book = {
    title: "Rich Dad Poor Dad ",
    author: "Robert kioshaki",
    year: 1986,
    
}
console.log(book)

// - Task 2: Access and log the title and author properties of the book object.
console.log(book.title)
console.log(book["author"])


// **Activity 2: Object Methods**
// - Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetls = function () {
    
    return  `  the book ${this.title} i written by${this.author}`
}

let res = book.getDetls();
console.log(res)

// - Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.setYear = function (year) {
    this.year = year
};

book.setYear(2005)

console.log(book)


// **Activity 3: Nested Objects**
// - Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = {
    name: "R.K Library SC",
    books:["PDPD" , "Bibble Of Js" , "PP the future language"]
}

console.log(library)

// - Access and log the name of the library and the titles of all the books in the library.

console.log(library.name)
library.books.forEach((book)=>{console.log(book)})

// **Activity 4: The this Keyword**
// - Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
// book.getDetls = function () {
    
//     return  `  the book ${this.title} i written by${this.author}`
// }

// let res2 = book.getDetls();
// console.log(res) done previously


    
    
    
// **Activity 5: Object Iteration**
// - Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (const key in book) {
 console.log(key  , book[key])       
}


// - Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object.

console.log(Object.keys(book))
console.log(Object.values(book))