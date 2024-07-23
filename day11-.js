// # Day 11: Promises and Async/Await

// ## Tasks/Activities

// ### Activity 1: Understanding Promises

// #### Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);   
})

let res = promise.then((message) => console.log(message));

// #### Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using `.catch()`.
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("Promise rejected after 2 seconds");
    }, 2000);
})

let res2 = promise2.catch((err)=>console.log(err));

// ### Activity 2: Chaining Promises

// #### Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched");
    }, 1000);
});

fetchData
    .then((message) => {
        console.log(message);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data processed");
            }, 1000);
        });
    })
    .then((message) => {
        console.log(message);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data displayed");
            }, 1000);
        });
    })
    .then((message) => {
        console.log(message);
    });

// ### Activity 3: Using Async/Await

// #### Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function asyncFunction() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved value");
        }, 2000);
    });
    let result = await promise;
    console.log(result);
}

asyncFunction();

// #### Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function asyncFunctionWithError() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error occurred");
        }, 2000);
    });
    try {
        let result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

asyncFunctionWithError();

// ### Activity 4: Fetching Data from an API

// #### Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// #### Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchDataAsync() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchDataAsync();

// ### Activity 5: Concurrent Promises

// #### Task 8: Use `Promise.all` to wait for multiple promises to resolve and then log all their values.
let promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise A resolved");
    }, 1000);
});

let promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise B resolved");
    }, 2000);
});

let promiseC = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise C resolved");
    }, 3000);
});

Promise.all([promiseA, promiseB, promiseC]).then((values) => {
    console.log(values);
});

// #### Task 9: Use `Promise.race` to log the value of the first promise that resolves among multiple promises.
Promise.race([promiseA, promiseB, promiseC]).then((value) => {
    console.log(value);
});
