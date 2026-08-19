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



// ==================DOM Traversing=====================
// DOM traversing is the process of navigating through
// the DOM tree to access parent, child or sibling elements and nodes.

// Downwards (to child element)

// Method                     Discription
// element.childern           Return an HTML collection of child element
//                            (only element nodes, not text nodes).
// e.firstElementChild        Return the first child element
// e.lastElementChild         Return the last child element


// let div = document.querySelector('#traversing');

// console.log(div.children);
// console.log(div.firstElementChild);
// console.log(div.lastElementChild);


// for (let v of div.children) {
//     console.log(v);
// };


// check is it array => false
// console.log(Array.isArray(div.children));

// HTMLCollection not work on forEach() beacuse it's output is in array
// but not actual array so we convert into array use Array.form

// check is it array => true
// console.log(Array.isArray(Array.from(div.children)));
// Array.from(div.children).forEach((items) => {
//     console.log(items);
// });



// Method                     Discription
// e.parentElement            Return the parent element nodes.
// e.closest('use id class')  Return the nearest ancestor including 
//                            itself that match the selector upword.
// e.previousElementSibling   Return the previous sibling element.
// e.nextElementSibling       Return the next sibling element.

// Upward:    parentElement, closest()
// Sideways:  previousElementSibling, nextElementSibling

// let p = document.querySelector('p');
// let button = document.querySelector('.btn')

// console.log(p.parentElement);
// console.log(p.closest('#traversing'));
// console.log(p.closest('p'));
// console.log(p.previousElementSibling);
// console.log(p.nextElementSibling);



// ==================Node-based Traversing=====================

// Method                     Discription
// e.childNodes               Nodelist of all child nodes (including text,comments).
// e.firstchild               First child node maybe text
// e.lastchild                last child node 
// e.parentNode               parent node (could be element document etc)
// e.previousSibling          previous sibling node (could be text)
// e.nextSibling              Next sibling node (could be text)

// let div = document.querySelector('#traversing');
// let btn = document.querySelector('.btn');
// console.log(div.childNodes);
// console.log(div.firstChild);
// console.log(div.lastChild);
// console.log(div.parentNode);
// console.log(btn.previousSibling);
// console.log(btn.nextSibling);















