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




















