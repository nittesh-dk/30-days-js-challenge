// ### Day 5: Functions

// **Tasks/Activities:**


// #### Activity 1: Function Declaration

// - **Task 1:** Write a function to check if a number is even or odd and log the result to the console.

function checkNumIsEvenOrNot(num){
    if (num % 2 == 0) {
        console.log(`${num} is even`)
    } else {
        console.log(`${num} is odd`)

    }
}

checkNumIsEvenOrNot(24)

// - **Task 2:** Write a function to calculate the square of a number and return the result.

function calculateSquare(num) {
    return num * num;
}
 let sqof2 = calculateSquare(2)
 console.log(sqof2)
 



// #### Activity 2: Function Expression

// - **Task 3:** Write a function expression to find the maximum of two numbers and log the result to the console.

let maxOfTwoNum = function (num1  , num2) {
    if (num1 > num2) {
         return `${num1} is greate thean ${num2}`
    } else {
         return `${num2} is greate thean ${num1}`

    }
}




let  res= maxOfTwoNum(6,3)
console.log(res)



// - **Task 4:** Write a function expression to concatenate two strings and return the result.



let concatenateStr = function (str1 ,str2) {
    
    return `${str1} ${str2}`
    return str1 + str2; // the  cam also be possible 
}

let concatenateRes = concatenateStr("hello" , "bro")
console.log(concatenateRes)



// #### Activity 3: Arrow Functions

// - **Task 5:** Write an arrow function to calculate the sum of two numbers and return the result.

    let sumOfTwoNumber = (num1, num2)=> num1 + num2;
// let sumOfTwoNumber = (num1, num2)=> { return num1 + num2}; // when using curly braces , return keyword muat be written
     
    console.log(sumOfTwoNumber(2,5))


// - **Task 6:** Write an arrow function to check if a string contains a specific character and return a boolean value.

let strIncludes = (str, char) => {
     return str.includes(char)
}

let strcheck = strIncludes("hello", "h")
console.log(strcheck)

// #### Activity 4: Function Parameters and Default Values

// - **Task 7:** Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function productOfTwoNumbers(num1, num2 = 2) {
    return num1 * num2;
}

let resOfProduct = productOfTwoNumbers(2,3)
// let resOfProduct = productOfTwoNumbers(2) . by deafult for seond paramter the value assign to  2nd parameter will be  2
console.log(resOfProduct)


// - **Task 8:** Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

let gretFunction = (name, age = 18) => ` hello ${name} ji namaste appka age ${age}`;

console.log(gretFunction("nitesh", 16))
// console.log(gretFunction("nitesh"))


// #### Activity 5: Higher-Order Functions


// - **Task 9:** Write a higher-order function that takes a function and a number, and calls the function that many times.
function functionRepeater(func, times) {
    
    for (let i = 0; i < times; i++){
        func()
    }


}

functionRepeater(() => {
    console.log("hello")
} , 2)




// - **Task 10:** Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function allHOF(func1, func2, value){
    let res = func1(value);
    let res2 = func2(res);
    return res2; 
}

let ans = allHOF(x => x * 2, x => x + 2, 2)
 
//  value ko function one ,  ke argument me do then , function one ka result function 2 ke argument me do , then function 2 ke reuslt ko main function ke result me bhej do , this iswhat  happening here 

 console.log(ans)

