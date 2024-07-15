// Day 3: Control Structures

// Activity 1: If-Else Statements

// Task 1:
// Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = 12;
if (number > 0) {
    console.log(`the ${number} is positive number  `)
} else if (number < 0) {
    console.log(`the ${number} is negative number  `)
    
    } else {
    console.log(`the ${number}  is zero   `)

}


// Task 2:
// Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

 let age = 23;

if (age >= 18) {
     console.log("you are eligible for voting")
     } else if (1 < age || age > 18) {
    console.log("you are not eligible for voting")
    
} else {
    console.log("please enter the valid age ")
 }




// Activity 2: Nested If-Else Statements

// Task 3:
// Write a program to find the largest of three numbers using nested if-else statements.

let a = 10;
let b = 20;
let c = 40;

if (a > b) {
    if (a > c) {
        console.log(`${a} is greater among the two numbers` )
        } else {
        console.log(`${c} is greater among the two numbers` )
        
    }
} else if (b > c) {
    console.log(`${b} is greater among the two numbers `)
} else {
    console.log(`${c} is greater among the two numbers`)
}





// Activity 3: Switch Case

// Task 4:
// Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let weekCount = 1

switch (weekCount) {
    case 1: console.log("monday")
        break;
    case 2: console.log("tuesday")
        break;
    case 3: console.log("wednesday")
        break;
    case 4: console.log("thursday")
        break;
    case 5: console.log("friday")
        break;
    case 6: console.log("saturday")
        break;
    case 7: console.log("sunday")
        break;
       

    default: console.log("please enter the valid week count number")
        break;
}


// Task 5:
// Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.


let grade = "A";

switch (grade) {
    case "A": console.log("you scored between 91-100")
        break;    
    case "B ": console.log("you scored between 81-90")
        break;    
    case "c ": console.log("you scored between 71-80")
        break;    
    case "D ": console.log("you scored between 61-70")
        break;    
    case "A ": console.log("you scored between 51-60")
        break;    
}





// Activity 4: Conditional (Ternary) Operator
// Task 6:
// Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.


 number % 2 ==0 ? console.log("the given number is even number") : console.log("the given number is odd number ")

// Activity 5: Combining Conditions
// Task 7:
// Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
//  divisible by 4
//  or me 100 se not divisible aur 400 se divisible 

let year = 2032;

if (year % 4 == 0 &&( year % 100 != 0 || year % 400 == 0)) {
    console.log("the  given year is a leap year")
    } else {
    console.log("the  given year is not  a leap year")

}
