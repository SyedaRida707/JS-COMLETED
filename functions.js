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




