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
# Day 4: Loops

This repository contains solutions for the tasks and activities related to loops in JavaScript, including for loops, while loops, do...while loops, nested loops, and loop control statements.

## Tasks/Activities

### Activity 1: For Loop

1. **Task 1:**
    Write a program to print numbers from 1 to 10 using a for loop.
    ```javascript
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    ```

2. **Task 2:**
    Write a program to print the multiplication table of 5 using a for loop.
    ```javascript
    let number = 5;
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
    ```

### Activity 2: While Loop

3. **Task 3:**
    Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
    ```javascript
    let finalNum = 10;
    let num = 0;
    let sum = 0;
    while (num <= finalNum) {
        sum += num;
        num++;
    }
    console.log(sum);
    ```

4. **Task 4:**
    Write a program to print numbers from 10 to 1 using a while loop.
    ```javascript
    let num1 = 10;
    while (num1 >= 1) {
        console.log(num1);
        num1--;
    }
    ```

### Activity 3: Do...While Loop

5. **Task 5:**
    Write a program to print numbers from 1 to 5 using a do...while loop.
    ```javascript
    let num2 = 1;
    do {
        console.log(num2);
        num2++;
    } while (num2 <= 5);
    ```

6. **Task 6:**
    Write a program to calculate the factorial of a number using a do...while loop.
    ```javascript
    let num3 = 4;
    let factorial = 1;
    do {
        factorial *= num3;
        num3--;
    } while (num3 >= 1);
    console.log(factorial);
    ```

### Activity 4: Nested Loops

7. **Task 7:**
    Write a program to print a pattern using nested for loops: (ignore color)
    ```javascript
    const height = 5;
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 0; j < height - i; j++) {
            line += ' ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            line += '*';
        }
        console.log(line);
    }
    ```

### Activity 5: Loop Control Statements

8. **Task 8:**
    Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
    ```javascript
    for (let i = 1; i <= 10; i++) {
        if (i == 5) continue;
        console.log(i);
    }
    ```

9. **Task 9:**
    Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
    ```javascript
    for (let i = 1; i <= 10; i++) {
        if (i == 7) break;
        console.log(i);
    }
    

# Day 5: Functions

This repository contains solutions for the tasks and activities related to functions in JavaScript, including function declarations, function expressions, arrow functions, function parameters and default values, and higher-order functions.

## Tasks/Activities

### Activity 1: Function Declaration

1. **Task 1:**
    Write a function to check if a number is even or odd and log the result to the console.
    ```javascript
    function checkNumIsEvenOrNot(num) {
        if (num % 2 == 0) {
            console.log(`${num} is even`);
        } else {
            console.log(`${num} is odd`);
        }
    }

    checkNumIsEvenOrNot(24);
    ```

2. **Task 2:**
    Write a function to calculate the square of a number and return the result.
    ```javascript
    function calculateSquare(num) {
        return num * num;
    }

    let sqof2 = calculateSquare(2);
    console.log(sqof2);
    ```

### Activity 2: Function Expression

3. **Task 3:**
    Write a function expression to find the maximum of two numbers and log the result to the console.
    ```javascript
    let maxOfTwoNum = function (num1, num2) {
        if (num1 > num2) {
            return `${num1} is greater than ${num2}`;
        } else {
            return `${num2} is greater than ${num1}`;
        }
    };

    let res = maxOfTwoNum(6, 3);
    console.log(res);
    ```

4. **Task 4:**
    Write a function expression to concatenate two strings and return the result.
    ```javascript
    let concatenateStr = function (str1, str2) {
        return `${str1} ${str2}`;
        // return str1 + str2; // This can also be possible
    };

    let concatenateRes = concatenateStr("hello", "bro");
    console.log(concatenateRes);
    ```

### Activity 3: Arrow Functions

5. **Task 5:**
    Write an arrow function to calculate the sum of two numbers and return the result.
    ```javascript
    let sumOfTwoNumber = (num1, num2) => num1 + num2;
    // let sumOfTwoNumber = (num1, num2) => { return num1 + num2 }; // When using curly braces, return keyword must be written
    console.log(sumOfTwoNumber(2, 5));
    ```

6. **Task 6:**
    Write an arrow function to check if a string contains a specific character and return a boolean value.
    ```javascript
    let strIncludes = (str, char) => {
        return str.includes(char);
    };

    let strcheck = strIncludes("hello", "h");
    console.log(strcheck);
    ```

### Activity 4: Function Parameters and Default Values

7. **Task 7:**
    Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
    ```javascript
    function productOfTwoNumbers(num1, num2 = 2) {
        return num1 * num2;
    }

    let resOfProduct = productOfTwoNumbers(2, 3);
    // let resOfProduct = productOfTwoNumbers(2); // By default for second parameter, the value assigned will be 2
    console.log(resOfProduct);
    ```

8. **Task 8:**
    Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
    ```javascript
    let greetFunction = (name, age = 18) => `Hello ${name}, namaste! Your age is ${age}.`;

    console.log(greetFunction("Nitesh", 16));
    // console.log(greetFunction("Nitesh")); // Default age is 18
    ```

### Activity 5: Higher-Order Functions

9. **Task 9:**
    Write a higher-order function that takes a function and a number, and calls the function that many times.
    ```javascript
    function functionRepeater(func, times) {
        for (let i = 0; i < times; i++) {
            func();
        }
    }

    functionRepeater(() => {
        console.log("hello");
    }, 2);
    ```

10. **Task 10:**
    Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
    ```javascript
    function allHOF(func1, func2, value) {
        let res = func1(value);
        let res2 = func2(res);
        return res2;
    }

    let ans = allHOF(x => x * 2, x => x + 2, 2);
    // value is passed to function one, the result of function one is passed to function two, and the result of function two is returned
    console.log(ans);
    ```



# Day 6: Arrays

This repository contains solutions for the tasks and activities related to arrays in JavaScript, including array creation, access, basic methods, intermediate methods, iteration, and multi-dimensional arrays.

## Tasks/Activities

### Activity 1: Array Creation and Access

1. **Task 1:** 
    Create an array of numbers from 1 to 5 and log the array to the console.
    ```javascript
    let num = [1, 2, 3, 4, 5];
    console.log(num);
    ```

2. **Task 2:**
    Access the first and last elements of the array and log them to the console.
    ```javascript
    console.log(num[0]);
    console.log(num[num.length - 1]);
    ```

### Activity 2: Array Methods (Basic)

3. **Task 3:** 
    Use the push method to add a new number to the end of the array and log the updated array.
    ```javascript
    num.push(6);
    console.log(num);
    ```

4. **Task 4:** 
    Use the pop method to remove the last element from the array and log the updated array.
    ```javascript
    num.pop();
    console.log(num);
    ```

5. **Task 5:** 
    Use the shift method to remove the first element from the array and log the updated array.
    ```javascript
    num.shift();
    console.log(num);
    ```

6. **Task 6:** 
    Use the unshift method to add a new number to the beginning of the array and log the updated array.
    ```javascript
    num.unshift(23);
    console.log(num);
    ```

### Activity 3: Array Methods (Intermediate)

7. **Task 7:**
    Use the map method to create a new array where each number is doubled and log the new array.
    ```javascript
    let mappedArray = num.map(el => el * 2);
    console.log(mappedArray);
    ```

8. **Task 8:**
    Use the filter method to create a new array with only even numbers and log the new array.
    ```javascript
    let filteredArray = num.filter(el => el % 2 == 0);
    console.log(filteredArray);
    ```

9. **Task 9:** 
    Use the reduce method to calculate the sum of all numbers in the array and log the result.
    ```javascript
    let sumOfElem = num.reduce((acc, val) => acc + val, 0);
    console.log(sumOfElem);
    ```

### Activity 4: Array Iteration

10. **Task 10:**
    Use a for loop to iterate over the array and log each element to the console.
    ```javascript
    for (let i = 0; i < num.length; i++) {
        console.log(num[i]);
    }
    ```

11. **Task 11:**
    Use the forEach method to iterate over the array and log each element to the console.
    ```javascript
    num.forEach(el => {
        console.log(el);
    });
    ```

### Activity 5: Multi-dimensional Arrays

12. **Task 12:**
    Create a two-dimensional array (matrix) and log the entire array to the console.
    ```javascript
    let twoD = [[2, 4], [4, 6], [6, 8]];
    console.log(twoD);
    ```

13. **Task 13:**
    Access and log a specific element from the two-dimensional array.
    ```javascript
    let spec = twoD[0][1];
    console.log(spec);
    ```

