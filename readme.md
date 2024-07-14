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
