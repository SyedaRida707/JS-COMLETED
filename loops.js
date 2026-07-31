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

// for (let i = 5; i >= 0; i--) {
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


// <======================================while loop======================================>
// when we don't know how many time will run loop
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }
// console.log(i); // true because we declare variable outside.



// when we don't know how many time user give password

// We don't know how many times the user will enter the wrong PIN. So we keep asking until they enter the correct one.

// let pin = '';
// while (pin !== '1234') {
//     pin = prompt('enter your pin...?');
//     console.log(pin);
// }

// User enters 1111 ❌ → Ask again
// User enters 5555 ❌ → Ask again
// User enters 9999 ❌ → Ask again
// User enters 1234 ✅ → Stop



// <======================================do while loop======================================>
// firstly execute body then condition check or if condition false atleast one time run

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);


// let i = 11;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);


// <======================================Continue======================================>
// Continue => skip the the part
// for (let i = 0; i <= 5; i++) {
//     if (i === 4) {
//         continue
//         // Skip the rest of the current iteration and immediately go to the update step (i++).
//     }
//     console.log(i);
// }


// <======================================break======================================>
// break => exit the the part
// for (let i = 0; i <= 5; i++) {
//     if (i === 4) {
//         break;
//         // exits the loop immediately. It does not execute console.log(i), i++, or any further iterations.
//     }
//     console.log(i);
// }


// <======================================for of loop======================================>
// //  for..of iteration karta hai string pr or array pr split krke value deta
// when you only need the values iterating over an array, string, or other iterable.

// let $name = 'Syeda Rida';
// let i = '';
// for (let n of $name) {
//     i++;
//     console.log(n, i);
// }

// let $family = ['Abid','Qurat','Atruba','Rida','Muqsit','Mutib','Muhib'];
// for(let i of $family){
//     console.log(i);
// }


// <======================================for in loop======================================>
// The for...in loop is used to iterate over the keys (property names) of an object.

// let _nums = [10, 20, 30, 40, 50];
// for (let e in _nums) {
//     console.log('Give index ' + e,' Give value',_nums[e]);
// }


// let $tudent = {
//     // Key      Value
//     name: 'rida',
//     age: '21'
// }
// for (let r in $tudent) {
//     // r = name
//     console.log(r, $tudent[r]);

//     console.log($tudent.name);  // direct access
//     console.log($tudent['name']);  // access through the string
//     console.log($tudent[r]);   // access through variable

// }



