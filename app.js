// <=========================Basic==========================>

// document.write('to show on web-page');
// console.log(10+20);
// alert('Hello today is 8-6-2025')
//prompt('enter any num')

// <============== variable ==============>

// var: is function-scoped (NOT block-scoped).
// It can be redeclared and reassigned.
// var $name = 'Rida Abid'; //Declare
// console.log($name);

// var $name = 'Atruba Abid'; //Redeclare
// console.log($name);

// $name = 'Muqsit'; //Reassign
// console.log($name);

// Function Scope:
// A variable declared with var inside a function cannot be accessed outside that function.
// function showName(){
//     var $userName = 'Qural ul Ain'
// }
// console.log($userName);

// var is not block-scoped.
// A variable declared with var inside a block (if, for, while) can still be accessed outside the block.
// if(true){
//     var num = 20;
// }
// console.log(num);








// let :  is a block scope variable we can not accessed outside the block if we create outside the block we can accessed inside the block. in let we cannot redeclare , just reassign without let keyword.

// let $userName = 'Rida Abid';   // Declare
// console.log($userName);

// let $userName = 'Rida Abid';  //never do this it will show you an error
// console.log($userName);

// $userName = 'muhib';    //Reassign
// console.log($userName);

// Block scope : never find outside
// function showName() {
//     let $name = 'mutib';
//     console.log($name);
// }
// showName()
// console.log($name);


// let b; //declare
// {
//     b = 90; // assign value in the scope
// }
// console.log(b);





// const : cannot be Reassign Always Constant , variable name and its value don't use again is also a block scope variable we can not accessed outside and never redeclare and reassign.

// const $name = 'Rida Abid';
// console.log($name);

// always give type error cause never reassign
// $name = "atruba";
// console.log($name);

// block scope we never find outside
// {
//     const $name = 'Rida Abid';
//     console.log($name);
// }
// console.log($name);



// ===================================== Hoisting =====================================
// Execution se pehle hi woh declarations ko memory mein register kar leti hai (hoisting), phir code line by line execute hota hai.
// // Hoisting means JavaScript processes variable declarations
// before executing the code.

// ---------------------- var ----------------------

// Variables declared with var are hoisted and initialized with undefined.
// So accessing them before their declaration does not give an error;
// it returns undefined.

// console.log(a); // undefined
// var a = 10;

// ---------------------- let ----------------------

// Variables declared with let are also hoisted,
// but they are NOT initialized.
// They remain in the Temporal Dead Zone (TDZ)
// until the declaration line is executed.

// console.log(a); // ReferenceError
// let a = 10;

// ---------------------- const ----------------------

// const is also hoisted but remains in the
// Temporal Dead Zone until its declaration.
// Accessing it before declaration throws a ReferenceError.

// console.log(a); // ReferenceError
// const a = 10;



// <==============================Template Literals==============================================>
// let $userName = 'Rida Abid';
// console.log('This is not easy to use concatination '+$userName); //Concatination
// console.log(`This is the easy way to use template literals ${$userName}`); //Template literals




// <================================Data Types in Js==============================================>
// Data Types => variables store which type of value
// primitive data type => store single value

// string
// let $string = 'Syeda Rida';
// console.log($string, typeof  $string);
// console.log(`${$string} ${typeof $string}`);


// number
// let $number = 200;
// console.log($number, typeof $number);

// boolean
// let $boolean = true;       // true = 1, false = 0
// console.log($boolean, typeof $boolean);

// let $null = null;
// console.log(null,typeof $null);  // type of null is object

// // undefined
// let $undefined ;
// console.log(typeof $undefined);

// bigint
// let $bigint = 10000000000000000000000000000000000000000000000000000n;
// console.log($bigint, typeof $bigint);

// symbol
// let $symbol = Symbol('Rida Abid');
// console.log($symbol, typeof $symbol);
// let $id1 = Symbol('id');
// let $id2 = Symbol('id');
// console.log($id1 === $id2);

// non-primitive data type = store multiple values

// array
// let $array = [10,20,30];
// console.log($array, typeof $array);


// object
// let $Object = {
//     name : 'Abid',
//     age : '50'
// }
// console.log($Object, typeof $Object);

// function
// function showName(){
// }
// console.log(typeof showName);


// ======================================Implicit Conversion========================================
// // Implicit conversion means JavaScript automatically
// converts one data type into another when needed.

// let a = 10;
// console.log(a+20);
// console.log(a-20);
// console.log(a*20);
// console.log(a/20);
// console.log(a%20);
// console.log('hello'-200); //NaN not a number
// console.log(a+'20');


// ================================Explicit conversion==========================================
// Explicit conversion means the programmer manually
// converts one data type into another.
// let a = 100
// console.log(String(a));
// console.log(typeof String(a));

// let a = '200';
// console.log(Number(a));
// console.log(typeof Number(a));

// let a = 1;
// console.log(Boolean(a));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(10));
// console.log(Boolean('hi'));

// <=======================================Convert Number====================================>
// parseInt() convert number give only number not float numbers
// let a = '67.7';
// console.log(parseInt(a));

// parseFloat() convert number give only float numbers
// let b = '67.7';
// console.log(parseFloat(b));

// Number() convert number give both number and float
// let c = '67.7';
// console.log(Number(c));

//  + convert number and give both number, and float
// let d = '67.7';
// console.log(+d);

// let a = Number(prompt('enter any number one'));
// let b = Number(prompt('enter any number two'));

// console.log(a + b, typeof a, typeof b);


// PRACTICE Question 1
// let $name = 'Qurat ul Ain';
// let $age = 40;
// let $isStudent = true;
// console.log(`
//     Name = ${$name}
//     Age = ${$age}
//     Student = ${$isStudent}`);

// PRACTICE Question 2
// let task = 'Bignner level';
// document.writeln(task);

// PRACTICE Question 3
// let count = 10;
// document.write(count+5);
// console.log(count += 5);

// PRACTICE Question 4
// let a = 10;
// let b = 5;
// let c = b;
// console.log(`${a},${b},${c}`);
// b = a;
// a = c;
// console.log(`${a},${b},${c}`);

// OR
// let a = 10;
// let b = 5;
// a = a + b;
// b = a - b;
// a = a - b
// console.log(`${a} ${b}`);

// PRACTICE Question 5
// console.log(`


//     Hello
//     I'm multi
//     line
//     of
//     code


//     `)


// <===============================Arithematic Operators========================================>
// used to perform the basic mathematicals operation.
// let a = 10;
// let b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// ** (Exponentiation Operator)
// Raises a number to the power of another number.
// Multiply the first number by itself as many times as the second number.
// console.log(a ** b);

// Post Increment = print then update value
// a++;
// console.log(a);
// Pre Increment = print and update at a same time
// console.log(++a);
// Post Decrement = print then update value
// a--;
// console.log(a);
// Pre Decrement = print and update at a same time
// console.log(--a);


// <===============================Assignment Operators========================================>
// Assignment operators are used to assign a value to a variable or update the value of a variable.
// let a = 10;
// let b = 5;
// b = b + b
// console.log(a += b); // a = a + b
// console.log(a -= b);
// console.log(a *= b);
// console.log(a /= b);
// console.log(a %= b);

// PRACTICE Question 6
// let a = 10;
// let b = 5;
// let c = a;
// a = b;
// b = c;
// console.log(a,b);

// a += b // 15
// b = a - b // 10
// a -= b // 5
// console.log(a, b);


// <===============================Comparison Operators========================================>
// used two compare two values.
// let a = 10;
// let b = 5;
// Loose Equality : Checks only the value, not the data type.
// console.log(a == '10');
// console.log(a != '10');
// Strict Equality : Checks both the value AND the data type.
// console.log(a === '10');
// console.log(a !== '10');
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

//PRACTICE Question 7
// (60>50) = true and true value is 1
// so (60>50) = 1 + 5 =6
// console.log((60>50)+5);

//PRACTICE Question 8
// let a = 10;
// let b = 5;
// let c = 4;
// console.log(a > b > 4); //1 > 4 // false

//PRACTICE Question 9
// let a = 10;
// let b = 5;
// let c = 4;
// console.log(b < a < c); // true


// <===============================Logical Operators========================================>
// Logical operators are used to combine two or more conditions and return a Boolean (true or false).

// let a = 20;
// let b = 10;
// Logical AND (&&): Returns true only if both conditions are true.
// console.log(a > b && b < a);

// Logical OR (||): Returns true if at least one condition is true.
// console.log(a > b || a < b);

// Logical NOT (!): Reverses the Boolean result (true becomes false, false becomes true).
// console.log(!(a === b));






























































