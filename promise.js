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

// 👉 Before Promises and async/await, JavaScript commonly used callbacks to handle tasks that
//  take time, such as fetching data.

// When you put too many callbacks inside other callbacks, the code becomes deeply nested:


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
//         reject({     // array,object,string whatever you want to add remmember this is a answer of failed
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
// Async/Await is a modern JavaScript feature used to handle asynchronous 
// operations and Promises in a clean and readable way.

// async
// Used before a function.
// An async function always returns a Promise.
// Allows the use of await inside the function.

// await
// Used with a Promise.
// Waits for the Promise to complete.
// Returns the resolved value.
// Pauses only the current async function, not the whole JavaScript program.


// async makes the function work with asynchronous operations, and await waits 
// for a Promise to finish and gives its result.

// let myPromise = async function () {
//     return 'hello';
// };
// console.log(myPromise());

// myPromise().then((res)=>{
//     console.log(res);  
// });

// async function test() {
//     console.log('test 1');
//     await console.log('test 2');
//     console.log('test 3');
// }
// test();
// console.log('test 4');

// Example
// let tasks = (taskAdd, time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`task is ${taskAdd} time is ${time}`)
//         }, time);
//     });
// };

// let doneTasks = async () => {
//     let task1 = await tasks('Math', 1000);
//     console.log(task1);
//     let task2 = await tasks('English', 1000);
//     console.log(task2);
//     let task3 = await tasks('urdu', 1000);
//     console.log(task3);
//     console.log(`All tasks done`);
// }
// doneTasks();


// =======================================
// promise.all() is js method that runs multiple promises in 
// parallel and waits until all of them succes.

// if any promise reject catch run otherwise then run

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('i am promise one fullfill');
//     }, 1000);
// });
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('i am promise 2 reject');
//     }, 2000);
// });

// Promise.all([p1, p2]).then((result) => {
//     console.log(`${result}`);
// }).catch((err) => {
//     console.log(err);
// });


// Example
// let tasks = (subject) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${subject}`)
//         }, 1000)
//     });
// };

// let showTasks = async () => {
//     // let task1 = await tasks('CS');
//     // console.log(task1);
//     // let task2 = await tasks('IT');
//     // console.log(task2);

//     // use this
//     let allpromise = await Promise.all([
//         tasks(`cs`),
//         tasks(`it`)
//     ])
//     console.log(allpromise);
//     console.log(allpromise[0]);
//     console.log(allpromise[1]);
    
// }
// showTasks();




