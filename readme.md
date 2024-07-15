# Day 1: Variables and Data Types

This repository contains solutions for the tasks and activities related to variable declarations, constant declarations, data types, and variable reassignment in JavaScript.

## Tasks/Activities

### Activity 1: Variable Declaration

1. Declare a variable using `var`, assign it a number, and log the value to the console.
    ```javascript
    var a = 10;
    console.log(a);
    ```

2. Declare a variable using `let`, assign it a string, and log the value to the console.
    ```javascript
    let str = "kushwaha";
    console.log(str);
    ```

### Activity 2: Constant Declaration

3. Declare a variable using `const`, assign it a boolean value, and log the value to the console.
    ```javascript
    const isLoggined = true; 
    console.log(isLoggined);
    ```

### Activity 3: Data Types

4. Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the `typeof` operator.
    ```javascript
    const num = 10;
    const strr = "kushwaha nitesh"; 
    const isLogout = false;
    const data = {
        name: "nitesh",
        rollono: 45,
    };
    const fruits = ["apple", "mango", "grapes", "banana"];

    console.log(typeof num);      // number
    console.log(typeof strr);     // string
    console.log(typeof isLogout); // boolean
    console.log(typeof data);     // object
    console.log(typeof fruits);   // object
    ```

### Activity 4: Reassigning Variables

5. Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
    ```javascript
    let initialValue = "hello tu kasie ho";
    console.log(initialValue);
    initialValue = "hello tu kasie ho";
    console.log(initialValue);
    ```

### Activity 5: Understanding `const`

6. Try reassigning a variable declared with `const` and observe the error.
    ```javascript
    const initialUsingConst = "hello professor";
    initialUsingConst = "hello kaha ja rahe ho !!"; // This will cause an error
    console.log(initialUsingConst);  // Uncaught TypeError: Assignment to constant variable.
    ```

# Day 2: Operators

This repository contains solutions for the tasks and activities related to arithmetic operations, assignment operators, comparison operators, logical operators, and ternary operators in JavaScript.

## Tasks/Activities

### Activity 1: Arithmetic Operations

1. Write a program to add two numbers and log the result to the console.
    ```javascript
    let num1 = 10;
    let num2 = 20; 
    console.log(num1 + num2); // 30
    ```

2. Write a program to subtract two numbers and log the result to the console.
    ```javascript
    console.log(num1 - num2); // -10
    ```

3. Write a program to multiply two numbers and log the result to the console.
    ```javascript
    console.log(num1 * num2); // 200
    ```

4. Write a program to divide two numbers and log the result to the console.
    ```javascript
    console.log(num1 / num2); // 0.5
    ```

5. Write a program to find the remainder when one number is divided by another and log the result to the console.
    ```javascript
    console.log(num1 % num2); // 10
    ```

### Activity 2: Assignment Operators

6. Use the `+=` operator to add a number to a variable and log the result to the console.
    ```javascript
    num1 += 20;
    console.log(num1); // 30
    ```

7. Use the `-=` operator to subtract a number from a variable and log the result to the console.
    ```javascript
    num2 -= 10;
    console.log(num2); // 10
    ```

### Activity 3: Comparison Operators

8. Write a program to compare two numbers using `>` and `<` and log the result to the console.
    ```javascript
    let n1 = 10;
    let n2 = 20;

    console.log(n1 > n2); // false
    console.log(n1 < n2); // true
    ```

9. Write a program to compare two numbers using `>=` and `<=` and log the result to the console.
    ```javascript
    function compareTwoNumbers(num1, num2) {
        if (num1 >= num2) console.log("n1 is greater than or equal to n2");
        if (num1 <= num2) console.log("n1 is less than or equal to n2");
    }
    compareTwoNumbers(n1, n2);
    ```

10. Write a program to compare two numbers using `==` and `!=` and log the result to the console.
    ```javascript
    console.log(n1 == n2); // false
    console.log(n1 != n2); // true
    ```

### Activity 4: Logical Operators

11. Write a program that uses the `&&` operator to combine two conditions and log the result to the console.
    ```javascript
    let userLoggedIn = true;
    let userAuth = false;
    if (userAuth && userLoggedIn) console.log("You can access the data from the backend");
    ```

12. Write a program that uses the `||` operator to combine two conditions and log the result to the console.
    ```javascript
    if (userAuth || userLoggedIn) console.log("You cannot access the data from the backend");
    ```

13. Write a program that uses the `!` operator to negate a condition and log the result to the console.
    ```javascript
    if (userLoggedIn) {
        userLoggedIn = !userLoggedIn;
        console.log("User successfully logged out");
    }
    ```

### Activity 5: Ternary Operator

14. Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
    ```javascript
    let numberTocheckIsPositiveOrNegative = 10

  numberTocheckIsPositiveOrNegative% 2 == 0 ? console.log("number is positive") : console.log("number is negative")

    ```


# Day 3: Control Structures

This repository contains solutions for the tasks and activities related to control structures in JavaScript, including if-else statements, nested if-else statements, switch cases, conditional (ternary) operators, and combining conditions.

## Tasks/Activities

### Activity 1: If-Else Statements

1. **Task 1:**
    Write a program to check if a number is positive, negative, or zero, and log the result to the console.
    ```javascript
    let number = 12;
    if (number > 0) {
        console.log(`the ${number} is positive number`);
    } else if (number < 0) {
        console.log(`the ${number} is negative number`);
    } else {
        console.log(`the ${number} is zero`);
    }
    ```

2. **Task 2:**
    Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
    ```javascript
    let age = 23;
    if (age >= 18) {
        console.log("you are eligible for voting");
    } else if (1 < age || age > 18) {
        console.log("you are not eligible for voting");
    } else {
        console.log("please enter the valid age");
    }
    ```

### Activity 2: Nested If-Else Statements

3. **Task 3:**
    Write a program to find the largest of three numbers using nested if-else statements.
    ```javascript
    let a = 10;
    let b = 20;
    let c = 40;
    if (a > b) {
        if (a > c) {
            console.log(`${a} is greater among the three numbers`);
        } else {
            console.log(`${c} is greater among the three numbers`);
        }
    } else if (b > c) {
        console.log(`${b} is greater among the three numbers`);
    } else {
        console.log(`${c} is greater among the three numbers`);
    }
    ```

### Activity 3: Switch Case

4. **Task 4:**
    Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
    ```javascript
    let weekCount = 1;
    switch (weekCount) {
        case 1: console.log("Monday");
            break;
        case 2: console.log("Tuesday");
            break;
        case 3: console.log("Wednesday");
            break;
        case 4: console.log("Thursday");
            break;
        case 5: console.log("Friday");
            break;
        case 6: console.log("Saturday");
            break;
        case 7: console.log("Sunday");
            break;
        default: console.log("please enter the valid week count number");
            break;
    }
    ```

5. **Task 5:**
    Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
    ```javascript
    let grade = "A";
    switch (grade) {
        case "A": console.log("you scored between 91-100");
            break;
        case "B": console.log("you scored between 81-90");
            break;
        case "C": console.log("you scored between 71-80");
            break;
        case "D": console.log("you scored between 61-70");
            break;
        case "F": console.log("you scored between 51-60");
            break;
        default: console.log("Invalid grade");
            break;
    }
    ```

### Activity 4: Conditional (Ternary) Operator

6. **Task 6:**
    Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
    ```javascript
    number % 2 == 0 ? console.log("the given number is even number") : console.log("the given number is odd number");
    ```

### Activity 5: Combining Conditions

7. **Task 7:**
    Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
    ```javascript
    let year = 2032;
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        console.log("the given year is a leap year");
    } else {
        console.log("the given year is not a leap year");
    }
    ```
