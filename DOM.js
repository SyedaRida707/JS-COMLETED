// =================DOM=======================
// DOM is like a tree structure through DOM we target any element

// console.log(window); // window in built object in javascript
// console.log(document);  // window document ki key hai


// let para = document.getElementById('paragraph');
// let para = document.querySelector('#paragraph');
// console.log(para);


// // Change Content of the tag whose have some content inside the tag
// const p = document.getElementById('paragraph');


// innerText
// Used to get or change text inside an HTML element.
// It works with plain text only.HTML tags do not work.
// p.innerText = 'hello dom';
// console.log(p);


// innerHTML
// Used to get or change HTML content inside an element.
// HTML tags work.
// p.innerHTML = '<b> this is bold </b>'
// console.log(p);


// ================Select Element Using QuerySelectors()=============================
// querySelector taking = class,id,tag using # .
// if two tag with same name target only one



// let pClass = document.querySelector('.demo1');  //by class
// let pId = document.querySelector('#demo2');     //by Id
// //by tag name P if we have two tag with same tag target only one
// let p = document.querySelector('p');
// console.log(pClass, pId, p);


// let input = document.querySelector('input');
// console.log(input);
// input.placeholder = 'Enter your name 😊'   //change placeholder
// console.log(input.placeholder);
// input.value = 'Rida';                      // give default value
// console.log(input.value);
// input.type = 'password';                   //change type
// console.log(input.type);


// ==================Query SelectorAll==================
// // querySelectorAll select all matching elements 
// and returns a nodelist, Array work on (Tag,Class)
// let li = document.querySelectorAll('li');
// console.log(li);
// console.log(li[0].innerHTML);
// console.log(li[1].innerHTML);
// console.log(li[2].innerHTML);

// ==================================================

// TASK 1
// let li = document.querySelectorAll('li');
// li.forEach((value, index) => {
//     value.innerText = `li ${index + 1}`;
//     console.log(value.innerText);
// });















