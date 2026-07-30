// <======================================LOOPS======================================>
// Loops are used to execute a block of code repeatedly.We can say Either a set numbers of times or while a condition is true.

// if we have an array and you want to access each member, the loop will help you do that, similarly, if you have an object, a loop can help you extract it's members . loop can also be used to iterate over the characters of a string.


// <======================================for loop======================================>
// when we know how many times you want to run the loop.
// Initialization,Condition,(Updation or increment and decrement)
// for (let i = 1; i <= 5; i++) {
//     console.log('We are loop we have ability to repeat the code ' + i);
//     // console.log(i);
// }

// for (let i = 5; i >= 0; --i) {
//     console.log(i);
// }
// console.log(i); //give error


// Task 1
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         continue;
//         console.log(i, ' even');
//     } else {
//         console.log(i, ' odd');
//     }
// }

// OR
// for(let i = 0; i <= 100; i = i + 2){
//     console.log(i,`even`);
// }
// for(let i = 1; i <= 100; i = i + 2){
//     console.log(i,`odd`);
// }
