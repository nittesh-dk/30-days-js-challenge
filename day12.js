// ## Day 12: Error Handling

// ### Tasks/Activities:

// #### Activity 1: Basic Error Handling with Try-Catch

// **Task 1:**

// - Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError(){
// try {
//     throw Error ("you are wroung why you are getting in again in to your comfort zone ")
// } catch (error) {
//     console.log("error occured", error)
// }



}

// throwError();



// **Task 2:**

// - Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.



function denominatorZero( num , den){

    try {
        if( den == 0) {
            throw Error("denominator is zero")
        } else {
            console.log(num/den)
        }
         
    } catch (error) {
        console.log("err :" , error.message)
        
    }
}

// denominatorZero(2 , 0)

// #### Activity 2: Finally Block

// **Task 3:**

// - Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.


try {
//     console.log("this is try block")
    // console.log(a)
} catch (error) {
    // console.log("this is  catch block")
    
} finally {
    // console.log("this is   finally  block")

}

//  if ther is an error in the try block then catch is also executed ,  and  finally does not depedends on the  error , it runs  . 


// #### Activity 3: Custom Error Objects

// **Task 4:**

// - Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.


class CoustomError extends Error {
    constructor (message){
        super(message) ;
        // this.message = message ;
        this.name = "CoustomError" ;
        this.errorKa = "Nitesh"

    }

}


function throwCoustomError() {
        
try {
    throw  new CoustomError("This is coustom erro message ") ;
} catch (error) {
     if ( error instanceof CoustomError){
         console.error(' caught a coustom err :' , error.message) ;
    } else {
         console.error('err a unexcepeted :' , error.message) ;

     }
}

}

// throwCoustomError();





// **Task 5:**

// - Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

function validatesForm(name , surname ='' ){
 try {
    if( name === '' || surname === '') {
        throw new CoustomError("please enter the name and age") ;
    } else {
        console.log(name + " "  + surname)
        // console.log(name + " "  + surname)
    }
    
 } catch (error) {
    console.log(error.message)
 }

}

// validatesForm('name 0' , 'kushwhaha')



// #### Activity 4: Error Handling in Promises

// **Task 6:**

// - Create a promise that randomly resolves or rejects. Use `.catch()` to handle the rejection and log an appropriate message to the console.
// let isTrue =false ;
let promise = new Promise((res,rej)=>{
let randomly = Math.random();

  if(randomly > 0.5){
    res("promise is resolved ")
  } else {
     rej("promise is rjected ")
  }
     

})

// let res = promise.then((data)=>console.log(data)).catch((err)=>console.log(err))

// **Task 7:**

// - Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function randomPromiseError(){
    try {
        
let res =  await promise
console.log(res)

    } catch (error) {
        console.log(error)
    }
}

// randomPromiseError();

// #### Activity 5: Graceful Error Handling in Fetch

// **Task 8:**

// - Use the fetch API to request data from an invalid URL and handle the error using `.catch()`. Log an appropriate error message to the console.

const invalidURL = 'https://example.com/invalid'; // Example of an invalid URL

// fetch(invalidURL)
//   .then(response => {
//     // Check if the response is successful (status 200-299)
//     if (!response.ok) {
//       throw new Error('Network response was not ok: ' + response.statusText);
//     }
//     return response.json(); // Assuming response is JSON; use .text(), .blob(), etc., as necessary
//   })
//   .then(data => {
//     // Handle successful data retrieval
//     console.log('Data received:', data);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the fetch
//     console.error('Error fetching data:', error);
//   });



// **Task 9:**

// - Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
    const url = 'https://invalid-url.example.com/data'; // Replace with an invalid URL
    try {
        const response = await fetch(url);
        
        // Check if response is OK (status 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Calling the async function
fetchData();
