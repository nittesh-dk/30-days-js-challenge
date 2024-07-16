// Day 4: Loops

// Tasks/Activities:

// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++){
    // console.log(i)
}





// Task 2: Write a program to print the multiplication table of 5 using a for loop.

let number = 5;
for (let i = 1; i <= 10; i++){
    // console.log(`${number} * ${i} = ${number * i}`)
}


// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let finalNum = 10;
let num = 0; 

let sum = 0  
while (num <= finalNum) {
    sum += num;
    num ++ 
}

// console.log(sum)




// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let num1 = 10 ;
while (num1 >= 1) {
    // console.log(num1);
    num1--;
}


// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let num2 = 1;
do {
    console.log(num2)
    num2++
} while (num2<=5);





// Task 6: Write a program to calculate the factorial of a number using a do...while loop.


let num3 = 4;
let factorial = 1;
do {
    factorial *=num3
    num3--;
} while (num3>=1);

// console.log(factorial)



// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops: (ignore color)
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




// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++){
    if (i == 5) continue;
    console.log(i)
}




// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.



for (let i = 1; i <= 10; i++){
    if (i == 7) break;
    console.log(i)
}
