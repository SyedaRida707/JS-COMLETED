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



// Callback hell
// Example of Synchronous
// setTimeout(() => {
//     console.log('Synchronous Task 1 done');
//     setTimeout(() => {
//         console.log('Synchronous Task 2 done');
//     }, 2000);
//     setTimeout(() => {
//         console.log('Synchronous Task 3 done');
//     }, 3000);
// }, 1000);




// Asynchronous: Tasks can start and finish independently without blocking other code.

// console.log('Asynchronous Task 1 done');
// setTimeout(() => {
//     console.log('Asynchronous Task 2 done');
// }, 5000);
// console.log('Asynchronous Task 3 done');







