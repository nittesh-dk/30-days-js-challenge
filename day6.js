// ### Activity 1: Array Creation and Access

// 1. Create an array of numbers from 1 to 5 and log the array to the console.
let num = [1, 2, 3, 4, 5];
console.log(num)


// 2. Access the first and last elements of the array and log them to the console.
console.log(num[0])
console.log(num[num.length - 1])


// ### Activity 2: Array Methods (Basic)
// 3. Use the push method to add a new number to the end of the array and log the updated array.
num.push(6)
console.log(num)



// 4. Use the pop method to remove the last element from the array and log the updated array.
num.pop()
console.log(num)




// 5. Use the shift method to remove the first element from the array and log the updated array.


num.shift()
console.log(num)

// 6. Use the unshift method to add a new number to the beginning of the array and log the updated array.
num.unshift(23)
console.log(num)



// ### Activity 3: Array Methods (Intermediate)
// 7. Use the map method to create a new array where each number is doubled and log the new array.

let mappedArray = num.map(el => el * 2)
// let mappedArray = num.map(function (el) {
//     return el * 2
// })

//  mapped  har yak array ke element ke liye kam karega , agar hum koi condition dege to hume vo condition return true ya false me karega

console.log(mappedArray)

// 8. Use the filter method to create a new array with only even numbers and log the new array.

//  filter shrif filtered array ke liye kam karta hai , ye hai naya array return karta hai  yus naye array vo hii ellemnts hote hai condition ko statifies karte hai yani ki true hota hai co condition  vo array ke elem ke liye
let filteredArray = num.filter(el=> el%2==0 )
console.log(filteredArray)

// 9. Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sumOfElem = num.reduce((acc , val ) => acc +val , 0) 
console.log(sumOfElem)

// accumalator ki by deafult value hoti hai zero


// ### Activity 4: Array Iteration
// 10. Use a for loop to iterate over the array and log each element to the console.

for (let i = 0; i < num.length; i++){
    console.log(num[i])
}

// 11. Use the forEach method to iterate over the array and log each element to the console.

  num.forEach(el => {console.log(el)})




// ### Activity 5: Multi-dimensional Arrays


// 12. Create a two-dimensional array (matrix) and log the entire array to the console.

let twoD = [[2, 4], [4, 6], [6, 8]];
console.log(twoD)

// 13. Access and log a specific element from the two-dimensional array.

let spec = twoD[0][1]
console.log(spec)