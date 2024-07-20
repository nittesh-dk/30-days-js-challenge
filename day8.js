// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let details = {
    name: 'John',  
    age:20 
}

console.log(`${details.name} and age is ${details.age}`);




// Task 2: Create a multi-line string using template literals and log it to the console.

let  book = 'the dominance '
let  book2 = 'the patience '

let str = `this is the first ${book}
use for doing the mastey on self control and ${book2} `



// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.


let num= [1, 2, 3];

let [a, b] = num;

console.log(a , b)


// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let bookNK = { 
    name: 'nitesh the offical js ',
    author :"nitesh-dk"

}


let { name, author } = bookNK; 
console.log(name ,author)


// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let num1 = [1,2,4,5,6,7]
let num2 = [8, 9, 10, 11, 12, 13, 14, 15]

let combinedArray = [...num1 , ...num2]

console.log(combinedArray)


// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sumOfAll(a, ...b) {
    return a + b.reduce((acc, el) => acc + el)
    
    //  here b is in the form of array 
}
const res = sumOfAll(1,2,3 ,4,5)
console.log(res)


// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(a, b=1) {
    
    return a * b 
}

let res2 = product(2)
let res4 = product(2 , 5)

console.log(res2)
console.log(res4)


// Activity 5: Enhanced Object Literals

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let obj = {
    name: "John",
    age: 30,
    greet() {
        return "Hello, " + this.name;
    }
}
// console.log(obj)
// console.log(obj.greet())



// Task 9: Create an object with computed property names based on variables and log the object to the console.

let key1 = "name";
let key2 = "age";
let value1 = "John";
let value2 = 30;
let obj2 = {
    // key1: value1, yese nahi kar sakte hai 
    [key1]: value1,
    [key2]: value2
}

console.log(obj2)
