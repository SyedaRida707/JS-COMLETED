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



// m = l → Reference copy (l and m point to the same array.)
// Reference Copy = means behavior and data both copy
// let l = [1, 2, 3, 4];
// let m = l;
// console.log(l);
// console.log(m);
// // Ater Push
// m.push(5, 6);
// console.log(l);
// console.log(m);

// shallow copy = means change in own variable not other like m
// let l = [1, 2, 3, 4];
// let m = [...l];
// console.log(l);
// console.log(m);
// m.push(5, 6);
// console.log(l);
// console.log(m);



// ==============================================


// TASK 1
// let score = [10, 20, 30];
// let find = [First, , third] = score;
// console.log(First, third);



// ==============================================


// TASK 2
// let student = {
//     name: 'rida',
//     age: 21,
//     Skill: {
//         course1: 'SMIT',
//         course2: 'ILMA'
//     }
// }
// let { Skill: { course1 } } = student;
// console.log(course1);


// ==============================================


// TASK 3
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// console.log([...a, ...b]);
// a = [11, 22, ...a, 33]
// console.log(a);



// ==============================================


// TASK 4
// const [first, ...second] = [10, 20, 30];
// console.log(first);
// console.log(second);



// =========================Array Higher Order Function=============================
// higher order function take a callback as an argument

// map() is an Array Method that takes a callback function as an argument,
//  transforms each element, and returns a new array of the same length without
// changing the original array.

// let array = [1, 2, 3];
// array.map((value, index) => {
//     console.log(value, 'value');
//     console.log(index, 'index');

// });
// console.log(array);



// when you give in variable then use return.
// let array = [1, 2, 3];
// let result = array.map((value, index) => {
//     console.log(value, index);
//     return value * 2
// })
// console.log(array);
// console.log(result);



// let l = [1, 2, 3];
// let result = l.map(v => v + 2); //automatic give
// console.log(result);


// ==============================================


// TASK 5
// let array = [5, 6, 7];
// let Square = array.map(v => v * 2);
// console.log(Square);


// ==============================================


// TASK 6
// let a = [1, 2, 3];
// let Square = a => a ** 2; // 1x1 =1, 2x2 =4, 3x3 =9
// let result = a.map(Square);
// console.log(result);


// OR
// let a = [1, 2, 3];
// let result = a.map(v => v ** 2);
// console.log(result);




// filter() is a js method that creates a new array with all elements
// that pass a condition specified in a callback function length depend on condition

// let a = [10, 20, 15, 18];
// let result = a.filter(v => v >= 18);
// console.log(result);

//  OR
// let a = [10, 20, 15, 18];
// let result = a.filter((v) => {
//     return v >= 18
// });
// console.log(result);

//  OR
// let a = [10, 20, 15, 18];
// let result = a.filter((v) => {
//     if (v >= 18) {
//         return true;
//     }
// });
// console.log(result);



// ==============================================


// TASK 7
// let users = [
//     {
//         name: 'atruba',
//         age: 22
//     },
//     {
//         name: 'rida',
//         age: 21
//     },
//     {
//         name: 'raza',
//         age: 20
//     },
//     {
//         name: 'mutib',
//         age: 13
//     },
//     {
//         name: 'muhib',
//         age: 12
//     }
// ];

// let result = users.filter(v => v['age'] >= 18)
// let value = result.map(u => u.age);
// console.log(result);
// console.log(value);



// reduce() adds or combines all the values in an array into one single value. not give array.
// reduce()
//    ↓
// "Take MANY values
//  and turn them into ONE value."

// let a = [1, 2, 3, 4];                          // sum initial value is 0
// let result = a.reduce((sum, num) => sum + num, 0)
// console.log(result);


// let a = [1, 2, 3, 4];
// let result = a.reduce((final, value) => final * value, 1);
// console.log(result);


// let a = [2, 2, 2];
// let multiply = a.reduce((m, v) => m ** v);
// console.log(multiply);


// let a = [1, 2, 3];
// let max = a.reduce((m, v) => {
//     return v > m ? v : m;
// })
// console.log(max);














