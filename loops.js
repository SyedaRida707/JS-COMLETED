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

// <======================================Nested loop======================================>
// A nested loop in JavaScript is a loop inside another loop. The inner loop completes all
// its iterations for each iteration of the outer loop.

// for (let i = 1; i <= 5; i++) {
//     document.writeln(`Iteration ${i} <br>`);
//     for (let j = 1; j <= 5; j++) {
//         document.writeln(`*`);
//     }
//     document.writeln(`<br>`);
// }


// for (let i = 1; i <= 3; i++) {
//     console.log('This is outer loop', i);
//     for (let j = 1; j <= 2; j++) {
//         console.log('This is inner loop', i);
//     }
// }


//  for multiplication
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         document.writeln(`${i} x ${j} = ${i * j} <br>`);
//     }
// }


// for (let i = 5; i >= 1; i--) {
//     document.writeln(`${i}`);
//     for (let j = 1; j <= i; j++) {
//         document.writeln(`*`);
//     }
//     document.writeln(`<br>`);
// }


// for (let i = 1; i <= 5; i++) {
//     document.writeln(`${i}`);
//     for (let j = 1; j <= i; j++) {
//         document.writeln(`*`);
//     }
//     document.writeln('<br>')
// }


// <==========================================================>


// Task 2
// for (let a = 1; a <= 10; a++) {
//     document.writeln(`2 x ${a} = ${a * 2} <br>`)
// }


// <==========================================================>

// Task 3
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i
//     console.log(i);  
// }
// console.log(sum);


// <==========================================================>


// Task 4
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//         document.writeln(`even numbers ${i} <br>`)
//     } else {
//         document.writeln(`odd numbers ${i} <br>`)
//     }
// }


// <==========================================================>



// Task 5
// continue will skip the increment which is why the loop become infinite
// let i = 1;
// while (i <= 10) {
//     if (i % 2 === 0) {
//         document.writeln(`even numbers ${i} <br>`)
//     } else {
//         document.writeln(`odd numbers ${i} <br>`)
//     }
//     i++;
// }


// <==========================================================>



// Task 6
// for (let n = 20; n >= 1; n--) {
//     console.log(n);
// }



// <==========================================================>




// Task 7
// let user = +prompt('enter any num to check prime number ?');
// let isPrime = true;

// for (let i = 2; i < user; i++) {
//     if (user % i == 0) {
//         console.log(user, i);
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime) {
//     console.log(`This is prime number ${user}`);
// } else {
//     console.log(`This is not prime number ${user}`);
// }



// <==========================================================>




// Task 8
// let user = +prompt('enter a any num to check its perfect number...?');
// let sum = 0;

// for (let i = 1; i <  user; i++) {
//     if (user % i === 0) {
//         sum += i;
//         console.log(sum, i);
//     }
// }

// if (sum === user) {
//     console.log('its perfect num', sum, user);
// } else {
//     console.log('its not perfect num', sum, user);
// }



// <==========================================================>



// Task 9
// Convert 12345 into 54321
// let num = 12345;
// let reserve = 0;

// while (num > 0) {
//     let lastDigit = num % 10;
//     reserve = reserve * 10 + lastDigit
//     num = parseInt(num / 10)
// }
// console.log(reserve);

//Round 1
// lastDigit = 12345 % 10 = 5
// reverse = 0 * 10 + 5 = 5
// num = 12345 / 10 = 1234

//Round 2
// lastDigit = 1234 % 10 = 4
// reverse = 5 * 10 + 4 = 54
// num = 1234 / 10 = 123

//Round 3
// lastDigit = 123 % 10 = 3
// reverse = 54 * 10 + 3 = 543
// num = 123 / 10 = 12

//Round 4
// lastDigit = 12 % 10 = 2
// reverse = 543 * 10 + 2 = 5432
// num = 12 / 10 = 1

//Round 5
// lastDigit = 1 % 10 = 1
// reverse = 5432 * 10 + 1 = 54321
// num = 1 / 10 = 0.1 = 0



// <==========================================================>



// Task 10
// let num = 23;
// let n = 0;
// while (num > 0) {
//     let l = num % 10
//     n = n * 10 + l
//     num = parseInt(num / 10)
// }
// console.log(n);

// l = 23 % 10  = 3
// n = 0*10 + 3 = 3
// num = parsint(num/10 ) = 2

// l = 2 % 10  = 2
// n = 3*10 + 2 = 32
// num = parsint(num/10 ) = 0



// <==========================================================>



// Task 11
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// let count = 1;
// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(`${count} `);
//         count++;
//     }
//     document.write(`<br>`);
// }











