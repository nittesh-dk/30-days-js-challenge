// # Day 1: Promises and Async/Await

// ## Tasks/Activities

// ### Activity 1: Understanding Promises




// #### Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.




let promise1 = new Promise((res,rej)=>{

    setTimeout(()=>{

        res('hello bro')
    },2000)

})

let res1 = promise1
.then((data=>{
    // console.log(data)
}))


// #### Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using `.catch()`.

let promise2 = new Promise((res,rej)=>{

    setTimeout(()=>{
rej('this is the error ')
    })


})

let res2 =  promise2.catch((err)=>{
    // console.log(err)
})

//  means we have say that somewhere then is connected with res , and catch is connected with rej 









// ### Activity 2: Chaining Promises

// #### Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

let promise3 = new Promise((res,rej)=>{
    
    res({name:"nitesh",
        rolloNo:36 ,
        class:"F SY"
    }) 
    
    rej({data:"error"}) 


    //  agar yis tarike se likha hai to by deafult jo pahala kikha hai vo chala jayega if res is first then it is in then if rej is first then it is in catch 
})


let res3 = promise3.then((data)=>{
return data.name 
})
.then((data)=>{
    // console.log(data)
})
.catch((err)=>{
    // console.log(err)
})

//  using . then  again again we can say it is thenable



// ### Activity 3: Using Async/Await


// #### Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

// ? we can say there is also t he another way beside try and catch , we can use async await 
 
 async function runPromise (){
    let res4 = await  promise1 ;
    console.log(res4)

    console.log("hello")
//   agar async aawait nahi likha to vo hello data ke ane ke pahale print hora hai 
}

// runPromise();


// #### Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

 async function runPromise2(){
     
     let res4 = await promise2 ;
                 
     console.log(res4)
     // writing this outside is not handling the error so for handling the error we can use try catch
     
      try {
        let res4 = await promise2 ;
                    
        console.log(res4)
        } catch (error) {
                console.log(error)
            }

}

// runPromise2()



// ### Activity 4: Fetching Data from an API


// #### Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// let res5 = fetch("https://dummyjson.com/users")
// res5
// .then((data)=>data.json()) // here the data is in  json so it are converting it into js object
// .then((data=>console.log(data)))
// .catch((err)=>console.log(err))




// #### Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

let getUserData = async ()=>{

    try {
        let res = await  fetch("https://dummyjson.com/users")
 let data= await  res.json()  // time lagata hai json ko js me convert karne me so use await here also 
        console.log(data)
    
    } catch (error) {
        console.log(error)
    }
    
}

// getUserData();



// ### Activity 5: Concurrent Promises


function nextTask(){

    // #### Task 8: Use `Promise.all` to wait for multiple promises to resolve and then log all their values.



// #### Task 9: Use `Promise.race` to log the value of the first promise that resolves among multiple promises.



// Promise.all is a method that takes an array of promises and returns a single promise. This returned promise resolves when all the promises in the array have resolved. The resolved value of the returned promise is an array of the resolved values of the input promises. If any of the input promises are rejected, the returned promise is immediately rejected with the reason of the first promise that was rejected.

// Promise.race is another method that takes an array of promises and returns a single promise. This returned promise resolves or rejects as soon as one of the promises in the array resolves or rejects. The resolved or rejected value of the returned promise is the same as the resolved or rejected value of the first promise that resolved or rejected.


let promise1 = new Promise((resolve ) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
let promise2 = new Promise((resolve,rej) => setTimeout(() => rej('Promise 2 resolved'), 3000));
let promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 3000));

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);  // in the form of array 
//     //  agar yak vhi reject huya to direct error ayega baki ka nahi  resolve batayega 
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });


Promise.race([promise1, promise2, promise3])
  .then((value) => {
    console.log(value); // 

    //  yaha par ye matter karta hai jiska pahale promise complte hota hai vo show hoga yuska response ho ya reject ho vo pahala vo  return hoa jayega in .race wale me 
  })
  .catch((error) => {
    console.error('Error:', error);
  });

}

nextTask();
