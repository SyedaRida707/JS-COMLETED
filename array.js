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

// let num = [1,2,3,4,5];
// num.pop();
// console.log(num.pop());
// let arr = [];
// console.log(arr.pop());


// unshift()
// (Adds elements to the beginning of an array.)
// (Modifies the original array.)
// (Returns the new length of the array.)

// let arr = [1, 2, 3, 4];
// console.log(arr, arr.length);
// arr.unshift(-1, 0)
// console.log(arr, arr.length);


// shift()
// (Removes the first element of the array.)
// (Modifies the original array.)
// (Returns the removed element.)
// (Returns undefined if the array is empty.)

// let fruits = ['apple','cherry','strawberry'];
// console.log(fruits);
// console.log(fruits.shift());

// let arr = [];
// console.log(arr.shift());


// splice()
// (Add, remove, or replace elements in an array.)
// (Modifies the original array)
// (An array of the removed elements.)

// let arr = [1, 2, 3, 4];
// add
// arr.splice(0,0,11,22);
// console.log(arr);
// arr.splice(-1, 0, 11, 22);
// console.log(arr);


// remove
// arr.splice(1,2)
// console.log(arr);

// remove all
// arr.splice(1);
// console.log(arr);

// replace
// arr.splice(3, 1, 33);
// console.log(arr);


// sort()
// (The sort() method is used to sort the elements of an array.)
// (It modifies the original array (in-place).)
// (It also returns the sorted array.)


// let a = ['a','c','b'];
// console.log(a.sort());

// let a = [100, 80, 40, 50];
// Ascending order
// console.log(a.sort((a, b) => a - b));
// Descending order
// console.log(a.sort((a, b) => b - a));


// reverse()
// (The reverse() method is used to reverse the order of elements in an array.)
// (It changes the original array.)
// (It returns the reversed array.)

// let nums = [10, 20, 30, 40];
// console.log(nums.reverse());

// let a = ['a','c','b'];
// console.log(a.reverse());


// fill()
// fill(value, start, end);
// (The fill() method is used to replace array elements with a given value.)
// (It fills the array with the same value from a starting index to an ending index.)
// (It modifies the original array.)
// (It returns the modified array.)
// (The end index is not included.)

// let nums = [10, 20, 30, 40, 50];
// console.log(nums.fill(77,1,4));
// console.log(nums.fill(22,1,5));



// <=========================================>


// TASk 6
// let i = [1, 2, 3, 4, 5];
// for (let a of i) {
//     i.pop();
//     console.log(i);
// }


// <=========================================>


// TASk 7
// let r = [1, 2, 3, 4];
// for (let a of r) {
//     r[3] = a;
//     console.log(a);
//     console.log(r);
// }


// <=========================================>


// <==================    METHODS   =======================>
//Non-Mutating methods means return a new array or value without modifying the original array.


// slice()
// (original array is not changed.)
// (Returns a new array containing selected elements.)

// let i = [1, 3, 4, 5, 7];
// let copyArray = i.slice(0, 4);
// console.log(copyArray);
// console.log(i);
// console.log(i.slice(-2));

// concat()
// (used to join/merge arrays and return a new array.)
// (combine arrays without changing the originals.)


// let a = ['a','b','c'];
// let b = ['d','e','f'];
// let merge = a.concat(b);
// console.log(merge);


// includes()
// (checks whether an array contains a specific value.)
// (doesn't modify the original array.)
// (true → value exists)
// (false → value doesn't exist)

// let i = [2,5,6,7];
// console.log(i.includes(6));
// console.log(i.includes(9));




// indexof()
// (finds the index (position) of a specific value in an array.)
// (If the value doesn't exist, it returns -1)


// let i = [10,30,20,50];
// console.log(i.indexOf(20));
// console.log(i.indexOf(60));



// join()
// (converts array elements into a string and puts a separator between them.)

// let a = [1, 2, 3, 4, 5];
// console.log(a.join());
// console.log(a.join('👻'));



// tostring()
// (converts an array into a string. toString mean give , separated values)
// (uses commas by default)

// let a = [1, 2, 3, 4, 5];
// console.log(a.toString());


// <=========================================>


// TASk 8
// let a = [1,2,3,5];
// let b = [2,4,3,5];

// for(let i of a){
//     if(b.includes(i)){
//         console.log(i);
//     }
// }


// <=========================================>


// TASk 9
// let a = [1, 1, 2, 3, 5, 3, 4, 4];
// let finalArray = [];
// for (let i of a) {
//     if (!finalArray.includes(i)) {
//         console.log(finalArray.push(i));
//     }
// }
// console.log(finalArray);




// <=========================================>


// TASk 10
// let a = [10, 100, 200, 50];
// let maxNum = 0;

// for (let i of a) {
//     if (i > maxNum) {
//         maxNum = i;
//         console.log(maxNum);
//     }
// }

// console.log(maxNum);




// <=========================================>


// TASk 11
// let a = [20, 33, 50];
// let array = [];
// for (let i of a) {
//     array.unshift(i)
//     // array.push(i)
// }
// console.log(array);



// <=========================================>


// TASk 12
// let a = [1, 33, 50, 90];
// let l = a.length;
// let final = [];
// console.log(l);

// for (let i = l - 1; i >= 0; i--) {
//     final.push(a[i])
// }
// console.log(final);


























