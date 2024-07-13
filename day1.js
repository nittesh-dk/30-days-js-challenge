// questions
// ### Tasks/Activities:

// #### Activity 1: Variable Declaration
// 1. Declare a variable using `var`, assign it a number, and log the value to the console.
// 2. Declare a variable using `let`, assign it a string, and log the value to the console.

var a = 10;
console.log(a);

let str = "kushwaha";
console.log(str);

// #### Activity 2: Constant Declaration
// 3. Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const isLoggined = true;
console.log(isLoggined);

// #### Activity 3: Data Types
// 4. Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the `typeof` operator.

const num = 10;
const strr = "kushwaha nitesh";
const isLogout = false;
const data = {
  name: "nitesh",
  rollono: 45,
};
const fruits = ["apple", "mango", "grapes", "banana"];

console.log(typeof num);
console.log(typeof strr);
console.log(typeof isLogout);
console.log(typeof data);
console.log(typeof fruits);
//! here we get that the data type of array is object that means the array behind the scene is object in js

// #### Activity 4: Reassigning Variables
// 5. Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let initialValue = "hello tu kasie ho ";
console.log(initialValue);
initialValue = "hello tu kasie ho ";
console.log(initialValue);

// #### Activity 5: Understanding `const`
// 6. Try reassigning a variable declared with `const` and observe the error.

const initialUsingConst = "hello proffesor";
initialUsingConst = "hello kaha ja rahe ho !! ";
// console.log(initialUsingConst)  // error is reassignment to const variables
