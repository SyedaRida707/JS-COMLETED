// ====================Functions============================

// Function => a function is a reusable block of code designed to perform a particular task

// function definition
// function hello(){
//     alert('welcome functions');
// }
// function call, invoke
// hello();

// ====================Hoisting============================


// Hoisting = JavaScript knows a function declaration before its position in the code.
// hi();
// function hi() {
//     console.log('hi 😊');
// }


// ====================Functions with parameters============================
// Parameter = variable written inside the function.
// It receives a value when the function is called
// Argument = actual value passed to the function.
// Parameters make functions reusable with different values

// function greetUser(nameuser) {
//     console.log('😉 welcome hi ' + nameuser);
// }
// greetUser('Rida');
// greetUser('Atruba');


// function sum(a, b) {
//     // when a num with undefined => NaN
//     console.log(a + b);
//     console.log(a - b);
// }
// sum(10)
// sum(10, 20)



//give default value b = 10
// function sum(a, b = 10) {
//     console.log(a + b);
//     console.log(a - b);
// }
// sum(10) // utilized b value
// sum(10, 20) // override b value



// ====================Rest Operator============================
// ...allParams collects all arguments into one array.
// It is useful when you don't know how many arguments will be passed.
// The ... means collect the remaining values


// interview
// rest operator all staf in one place ... mean give answer in array
// function sum(...allparams) {
//     console.log(allparams);
// }
// sum(1, 2, 3, 4, 5)


// ====================Return Type Function============================
// return gives a value back from the function.
// It does not print the value.
// We can store the returned value in a variable.
// After return, the function stops executing.


// return means give the result on the particular work just hold
// value but not print and after return no execute code
// function sum(a, b) {
//     return a + b;
// }
// let result = sum(10, 50);
// console.log(result);


// Task 1
// function texical(price) {
//     return price * .10
// }

// let productcost = 50000;
// let result = texical(productcost) + productcost;
// console.log(result);



// ====================Anonymous Function============================
// Anonymous function = a function that has no name.
// It can be stored in a variable.
// We can call it using the variable name.
// It can also be used directly as a callback.
// Callback = a function passed to another function as a value/argument to be used/called later.


// Anonymouse function => an anonymouse function has no name
// it's stored in a variable and used it directly as a callback

// let showMe = function () {
//     console.log('Anonymouse function');
// }
// showMe()


// ====================Callback Function============================
// callback function => function passed to another function as a argument and executed code later

// function message(callback) {
//     console.log('i am a function');
//     callback();
// }
// function bye() {
//     console.log('i am a function use as an argumented called callback function');
// }

// message(bye);



// function sum(a, b) {
//     return a + b;
// }

// function calculate(num1, num2, callback) {
//     console.log('final calculation ', callback(num1, num2));
// }

// calculate(10, 20, sum)




// ====================Arrow Function ES6============================
// Arrow function is a shorter way to write a regular function.
// It uses the => arrow symbol.
// With {}, use return to return a value.
// Without {}, the value is automatically returned.
// If there is only one parameter, () can be omitted.



// let sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(5, 5));


// arrow function by default return (if we dont add curly bracket)
// let sum = (a, b) => a + b;
// console.log(sum(7, 3));



// also u have one parameter don't use round bracket
// let square = a => a*a;
// console.log(square(10));


// let square = (a) => {
//     return a * a;
// }
// console.log(square(2));




// ==================================================================
// TASK 1

// let vowels = 'aeiouAEIOU';
// let findVowels = (str) => {
//     let count = 0;
//     for (let i of str) {
//         if (vowels.includes(i)) {
//             count++;
//             console.log('yes it is a vowel', i, count);
//         }
//     }
//     return count;
// }
// console.log(findVowels('rida'));


// ==================================================================
// TASK 2
// let factorial = (a) => {
//     let fact = 1;
//     for (let i = 1; i <= a; i++) {
//         fact *= i;
//         console.log(i, fact);
//     }
//     return fact
// }
// console.log(factorial(5));


// ==================================================================
// TASK 3
// let wordsCount = (str) => {
//     let count = 0;
//     for (let i = 1; i <= str.length; i++) {
//         count++;
//     }
//     return count
// }
// console.log(wordsCount('rida'));






// ============================String Method=================================
// split() covert string into array
// The split() method breaks a string into parts and returns them as an array.

// split() is a string method.
// It breaks a string into parts and returns them as an array.
// The value inside split() is called the separator.
// The original string is not changed.

// let a = 'rida abid';
// console.log(a.split(' '));


// let a = 'rida,abid,qurat';
// console.log(a.split(','));


// let a = 'rida';
// console.log(a.split(""));



// ==================================================================
// TASK 4
// let string = (a) => {
//     return a.split(' ').length;
// }
// console.log(string('hey i am learn js'));



// ==================================================================
// TASK 5
// let string = (a) => {
//     let count = 0;
//     for (let i of a) {
//         if (i === ' ') {
//             count++;
//             console.log('space');
//         }
//     }
//     return count;
// }
// console.log(string('hey i am learn js'));



// ==================================================================
// TASK 6

// let wordsCheck = (str) => {
//     let res = str.split(" ");
//     let word = 0;

//     for (let v of res) {
//         if (!v == " ") {
//             word++;
//         }
//     }
//     return word;
// }
// console.log(wordsCheck('i am learn js'));

// console.log(false == ' ');


// ==================================================================

// let wordsCheck = (str) => {
//     let res = str.split(" ");
//     let word = 0;

//     for (let v of res) {
//         if (v !== " ") {
//             word++;
//         }
//     }
//     return word;
// }
// console.log(wordsCheck('i am learn js'));




