// <==================== ARRAY =====================>
// an array store multiple values in a single variable
// store different data type
// In JavaScript, an array can store any type of value,
// including numbers, strings, booleans, objects, functions, and even other arrays.

// let num = [1, 2, 3, 4];                      //num
// let name = ['atruba', 'rida'];               //string
// let arrayInarray = [[2, 5, 8]];              //array inside array or (multi diemension array)
// let booleanValue = [true, false];            //boolean
// let studentInfor = [{
//     name: 'rida',
//     age: 21
// }]                                           //object

// let arrayFunc = [function () {               // function in array
//     console.log('hi');
// }]


// console.log(num[3]);
// console.log(name[0]);
// console.log(arrayInarray[0][0]);
// console.log(booleanValue[0]);
// console.log(studentInfor[0].name);
// arrayFunc[0]();


// <=========================================>

// TASk 1
// let fruits = ['mango 🥭', 'cherry 🍒', 'apple 🍎', 'strawberry 🍓'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// <=========================================>

// TASk 2 reverse nikalo
// let fruits = ['mango 🥭', 'cherry 🍒', 'apple 🍎', 'strawberry 🍓'];
// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }


// <=========================================>


// TASk 3
// use of for of loop
// let nums = [10, 20, 30, 40, 50];
// let sum = 0;
// for(let i of nums){
//     sum += i;
//     console.log(i);
// }
// console.log(sum);


// <=========================================>
// use of for in loop

// for (let i in nums) {
//     sum += nums[i]
//     console.log(nums[i]);
// }
// console.log(sum);



// <=========================================>


// TASk 4
// let nums = [10, 20, 23, 55, 99, 77, 66, 44, 56, 21];
// for (let i of nums) {
//     if (i % 2 === 0) {
//         console.log('its even num',i);
//     }
// }


// <=========================================>


// TASk 5
// Change position of index 1
// let nums = [10, 20, 30];
// console.log(nums[1]);
// nums[1] = 40;
// console.log(nums[1]);



// <==================    METHODS   =======================>
//Mutating methods means modifying original array

// push()
// (Adds elements to the end of an array);
// (Changes the original array.)
// (Returns the new length of the array.)

// let nums = [10, 20, 30];
// console.log(nums, nums.length);
// nums.push(40, 50);
// console.log(nums, nums.length);

// pop()
// (Removes the last element from an array.)
// (Changes the original array.)
// (Returns the removed element.)
// (Returns undefined if the array is empty.)

let num = [1,2,3,4,5];
// num.pop();

console.log(num.pop(2));






