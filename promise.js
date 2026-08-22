// ==================Promise and Asynchronous programming==================
// A modern way to handle asynchronous code.

// Common async operation
// API calls (fetch)
// setTimeOut/setInterval
// file i/o
// Database Queries



// what is Asynchronous Programming?
// Synchronous:  Task execute one at a time in order.
// Next tast waits for the current one to finish.

// Callback hell : callbacks were the original way to handle async operation too many nested
// callbacks make code hard to read and maintain known as callbackHell or pyramid of Doom.


// It looks like a pyramid shape in the code: like triangle
// Callback hell
// Example of Synchronous
// setTimeout(() => {
//     console.log('Synchronous Task 1 done');
//     setTimeout(() => {
//         console.log('Synchronous Task 2 done');
//         setTimeout(() => {
//             console.log('Synchronous Task 3 done');
//             setTimeout(() => {
//                 console.log('Synchronous Task 4 done');
//             }, 4000);
//         }, 3000);
//     }, 2000);
// }, 1000);




// Asynchronous: Tasks can start and finish independently without blocking other code.

// console.log('Asynchronous Task 1 done');
// setTimeout(() => {
//     console.log('Asynchronous Task 2 done');
// }, 5000);
// console.log('Asynchronous Task 3 done');



// ====================================================

// What is a promise?
// A promise is an object that represents the eventual
// completion or failure of an asynchronous operation.
// =============STATE OF A PROMISE=================
// 1 Pending => initial state
// 2 FullFilled => Operation Successful (API's/File Handling/Database)
// when you think this task have some time to process it you will add in promise success
// 3 Rejected => Operation Failed

// resolve() means operation successful.
// It changes Promise state from Pending → Fulfilled.
// The value inside resolve() becomes the result for .then().

// 1 Pending state, 2 FullFilled state
// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('firstly i pending then i become FullFilled')
//     }, 2000);
// });
// console.log(myPromise);

// .then() handles the successful result of a Promise.
// It runs when resolve() is called.

// myPromise.then((result)=>{
//  console.log(result);
// });


// reject() means operation failed.
// It changes Promise state from Pending → Rejected.
// The value inside reject() becomes the error for .catch().

// 3 Rejected
// let myPromise = new Promise((resolve, reject) => {
//         reject('i rejected')
// });
// console.log(myPromise);

// .catch() handles the error/failure of a Promise.
// It runs when reject() is called.

// myPromise.catch((failed)=>{
// console.log(failed);
// });


// Without variable we use it directly .then or .catch according to resolve and reject
// A Promise can settle only once; after resolve() or reject() runs first, the other is ignored.

// new Promise((res, rej) => {
//     // if res is run then ignore rej
//     // res('i am successful');
//     // if rej is run then ignore res
//     rej('i am reject');
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });


// =================================================

// TASK 1
// let checkStatus = false;
// new Promise((resolve, reject) => {
//     if (checkStatus) {
//         resolve({     // array,object,string whatever you want to add remmember this is a answer of success
//             status: 1,
//             message: 'resolve'
//         })
//     } else {
//         resolve({     // array,object,string whatever you want to add remmember this is a answer of failed
//             status: 0,
//             message: 'rejected'
//         })
//     }
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });


// =================Promise Chaining=======================
// let work = (task, time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`This is the Task ${task} and its time ${time}`);
//             // resolve(`Task is ${task}`);
//             resolve();
//         }, time)
//     })
// }
// This is promise chaining
// .then() methods are connected one after another.
//  Each .then() returns the next Promise.
// work(1, 1000)
//     .then(() => work(2, 2000))
//     .then(() => work(3, 3000))

// or write this
// work(1, 1000)
//     .then(() => {
//         return work(2, 2000);
//     }).then(() => {
//         return work(3, 3000);
//     })


// This is .then nested
// A .then() is written inside another .then().
// work(1, 1000).then((result) => {
//     console.log(result);
//     work(2, 2000).then((result) => {
//         console.log(result);
//     })
// })


// ===================Async await===========================






