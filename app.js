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








// let :  is a block scope variable we can not accessed outside the block if we create outside the block we can accessed inside the block. in let we canot redeclare , just reassign without let keyword.

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










