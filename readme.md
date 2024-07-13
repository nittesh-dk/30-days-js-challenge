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
