
// ## Day 2: Operators

// ### Tasks/Activities:

// #### Activity 1: Arithmetic Operations

// - **Task 1:**
//   Write a program to add two numbers and log the result to the console.

let num1 = 10;
let num2 = 20; 
console.log(num1 + num2); //30



// - **Task 2:**
//   Write a program to subtract two numbers and log the result to the console.
console.log(num1-num2) //-10

// - **Task 3:**
//   Write a program to multiply two numbers and log the result to the console.

console.log(num1*num2) //200

// - **Task 4:**
//   Write a program to divide two numbers and log the result to the console.
console.log(num1/num2) // 0.5






// - **Task 5:**
//   Write a program to find the remainder when one number is divided by another and log the result to the console.

console.log(num1%num2)




// #### Activity 2: Assignment Operators

// - **Task 6:**
//   Use the `+=` operator to add a number to a variable and log the result to the console.
num1 += 20
console.log(num1)


// - **Task 7:**
//   Use the `-=` operator to subtract a number from a variable and log the result to the console.
num2 -= 10 
console.log(num2)

// #### Activity 3: Comparison Operators

// - **Task 8:**
//   Write a program to compare two numbers using `>` and `<` and log the result to the console.
let n1 = 10
let n2 = 20

console.log(n1>n2)
console.log(n1<n2)

// - **Task 9:**
//   Write a program to compare two numbers using `>=` and `<=` and log the result to the console.
function compareTwoNumbers(num1, num2) {
    if (n1 >= n2 ) console.log("`n1 is greater than or equal to n2")
    if (n1 <= n2 ) console.log("`n2 is greater than n1 or queal to n1")
}
compareTwoNumbers();

// - **Task 10:**
//   Write a program to compare two numbers using `==` and `!=` and log the result to the console.
console.log(n1 == n2)
console.log(n1 != n2)


// #### Activity 4: Logical Operators

// - **Task 11:**
//   Write a program that uses the `&&` operator to combine two conditions and log the result to the console.

let userLoggedIn = true;
let userAuth = false;
if(userAuth && userLoggedIn) console.log("you can access the data from the backend") // here if the  option should be true ,


// - **Task 12:**
//   Write a program that uses the `||` operator to combine two conditions and log the result to the console.

if(userAuth || userLoggedIn) console.log("you cannot access the data from the backend") // if any one of the condition is ture then the code written in if block will be exceuted


// - **Task 13:**
//   Write a program that uses the `!` operator to negate a condition and log the result to the console.
if (userLoggedIn) {
    userLoggedIn = !userLoggedIn
     console.log("user successfully logout")
}

// #### Activity 5: Ternary Operator

// - **Task 14:**
//   Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let numberTocheckIsPositiveOrNegative = 10

if (numberTocheckIsPositiveOrNegative % 2 == 0) {
    console.log("the number is positive")
} else {
    console.log("the number is negative ")
}
