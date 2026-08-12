// ===========================Object===============================
// An object stores data as key-value pairs an object is a collection of key-value pairs.
// keys are always strings or symbols, values can be any data type.

// const student = {
//     name: 'rida',
//     course: 'MWA',
//     age: 21,
//     email: 'syeda@gmail.com',
//     1: 10
// }
// console.log(student);
// console.log(student.name);

// key with . 1 give error dont access
// console.log(student.1);

// Dot notation
// console.log(student.age);
// Square notation
// console.log(student['age'])
// console.log(student[1])


// Adding Key in student  inserting and updating if the key already in student and delete key
// add
// student.address = 'karachi';
// console.log(student);

//  updating
// student.name = 'atruba';
// console.log(student);
// console.log(student.name);

// delete
// delete student[1];
// console.log(student);


// let useremail = 'atruba@gmail.com'
// const user = {
//     'name': 'atruba',
//     age: 21,
//     infor: {
//         course: 'web',
//         address: 'karachi'
//     },
//     useremail
// }
// console.log(user);


// Destructuring = taking values out of an object and putting them into variables.

// now age work as a variable
// let { age } = user
// console.log(age);

// Nesting Destructuring
// let { infor: { course, address } } = user
// console.log(infor);
// console.log(address);
// console.log(course);

// Renaming variable = it does not change the original key inside the object
// let { age: userAge } = user;
// console.log(userAge);
// console.log(user);

// What is rest operator
// The rest operator collects multiple remaining values/properties into a single variable.
// ...rest collects the remaining properties into a new object.

// let {age,...remain} = user;
// console.log(age);
// console.log(remain); //give remain keys in new object




// Array Destructuring
// let a = [10, 20, 30];
// let [q, r, s] = a;
// console.log(q);
// console.log(r);
// console.log(s);


// Skipping item
// let a = [10, 20, 30];
// let [, , s] = a;
// console.log(s);


// Rest Operator
// let a = [10, 20, 30];
// let [q, ...rest] = a;
// console.log(q);
// console.log(rest);














