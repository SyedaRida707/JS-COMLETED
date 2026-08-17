// =======================Events===========================
// Event → An action that happens on a webpage, like clicking a button.
// Function → The code that performs a task.
// Event handling → Running a function when an event happens.
//                  tells JavaScript: "When the button is clicked, run this function."

// function showme(){
//     alert('Hello events');
// }


// =================================================


// TASK 1
// let input = document.querySelector('#password');
// let button = document.querySelector('#btn');

// function showMe() {
//     if (button.innerHTML === 'show') {
//         input.type = 'password';
//         input.placeholder = 'enter the password'
//         button.innerHTML = 'hide';
//     } else {
//         input.type = 'text';
//         input.placeholder = 'enter the name'
//         button.innerHTML = 'show'
//     }
// }


// ========================== addEventListener ================================

// addEventListener => When this event happens, run this code.

// element → the HTML element you want to add event like button
// event → what should happen (click, mouseover, keydown, etc.)
// function → code that runs when the event occurs

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     alert('this is addEventListener');
// });


// =================================================


// TASK 2
// let h1 = document.querySelector('h1');
// let p = document.querySelector('p');
// let btn = document.querySelector('#swap');

// btn.addEventListener('click', () => {

//     let pData = p.innerText;
//     let h1Data = h1.innerText;

//     p.innerText = h1Data;
//     h1.innerText = pData
// });


//=========================== Applying css using js===============
// let p = document.querySelector('.para');
// p.style.fontSize = '32px';
// p.style.color = 'red';



// =================================================


// TASK 3
// let h1 = document.querySelector('h1');
// let btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     if (h1.style.color == 'black') {
//         h1.style.color = 'blue'
//         h1.style.fontSize = '35px'
//         btn.style.backgroundColor = 'yellow';
//     } else {
//         h1.style.color = 'black'
//         h1.style.fontSize = '10px'
//         btn.style.backgroundColor = 'white';
//     }
// });


// project 1
// Create enquiryModel

// ==================Add/Remove/Toggle  class======================
// let btn1 = document.querySelector('#add');
// let btn2 = document.querySelector('#remove');
// let btn3 = document.querySelector('#toggle');
// let p = document.querySelector('p')
// // adding class
// btn1.addEventListener('click', () => {
//     p.classList.add('active')
// });
// // remove class
// btn2.addEventListener('click', () => {
//     p.classList.remove('active')
// });
// // toggle mean if add so remove and if remove so add
// btn3.addEventListener('click', () => {
//     p.classList.toggle('active')
// });

// project 2
// create clickable navbar

// project 3
// Create typing words count


// ================== Methods ======================
// Math.random() is  built in method in js that,
//  generates a random decimal num between 0 to 1.
// it always return 0 <= number < 1
// it can be 0, it can be 0.99999, it can never be 1.
// it returns a random decimal number greater than or equal to 0 and less than 1

// console.log(Math.random());

// Math.floor() is built in js method that
// rounds a number down to the nearest smaller whole number.
// remove the decimal part by moving the num down to the nearest whole number

// console.log(Math.floor(5.3)); //5
// console.log(Math.floor(-5.3)); //-6


//Math.ceil() means always go up to the next whole number.
// console.log(Math.ceil(8.9));  // 9
// console.log(Math.ceil(-8.9));  //-8

// Math.round() is a built in js method that
// rounds a number to the nearest whole number.
// if the decimal part is 0.5 or greater => round up
// if the decimal part is less than 0.5 => round down

// console.log(Math.round(0.5));  // 1
// console.log(Math.round(0.3));  //0

// console.log(Math.round(8.8));  // 9
// console.log(Math.round(-8.8));  // -9

// console.log(Math.round(-2.3)); // -2
// console.log(Math.round(-2.7)); // -3

// console.log(Math.round(-8.8));



// ======================= Events ============================
// An event is an action performed on a webpage
// such as clicking, typing, or scrolling.

// ==========Mouse Events=========

// Events                Discription
// Click                 Single Click
// dblclick              Double Click
// contextmenu           Right  Click
// mouseenter            Mouse enter element
// mouseleave            Mouse leaves element
// mousedown             Mouse button pressed
// mousemove             Mouse movement
// mouseup               Mouse button released


// let btn = document.querySelector('.eventss');

// btn.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'skyblue'
// });

// btn.addEventListener('dblclick', () => {
//     document.body.style.backgroundColor = 'skyblue'
// });

// btn.addEventListener('contextmenu', () => {
//     document.body.style.backgroundColor = 'skyblue'
// });

// btn.addEventListener('mouseenter', () => {
//     document.body.style.backgroundColor = 'skyblue'
// });

// btn.addEventListener('mouseleave', () => {
//     document.body.style.backgroundColor = 'skyblue'
// });

// btn.addEventListener('mousedown', () => {
//     document.body.style.backgroundColor = 'skyblue'
// });

// btn.addEventListener('mousemove', () => {
//     document.body.style.backgroundColor = 'skyblue'
// });

// btn.addEventListener('mouseup', () => {
//     document.body.style.backgroundColor = 'skyblue'
// });


// ==========Keyboard Events=========

// Events                Discription
// keydown               Key pressed (any key)
// keyup                 Key released
// keypress              key pressed deprecated , avoid.

// let input = document.querySelector('.text');

// input.addEventListener('keydown', ()=>{
//     document.body.style.backgroundColor = 'yellow';
// });


// input.addEventListener('keyup', ()=>{
//     document.body.style.backgroundColor = 'yellow';
// });

// Example
// input.addEventListener('keydown', ()=>{
//     document.body.style.backgroundColor = 'yellow';
// });

// input.addEventListener('keyup', ()=>{
//     document.body.style.backgroundColor = 'green';
// });

// keypress and keydown are similar, but keypress is deprecated. Use keydown instead.
// input.addEventListener('keypress', () => {
//     document.body.style.backgroundColor = 'yellow';
// });


// ==========Form Events=========

// Events                Discription
// submit                Form submitted
// change                Value changed (select,checkbox,etc)
// input                 value entered in realtime
// focus                 input get focus
// blur                  input get blur

// let form = document.querySelector('form');
// let input = document.querySelector('input');
// let select = document.querySelector('select');

// form.addEventListener('submit', () => {
//     console.log('submit');
//     document.body.style.backgroundColor = 'orange'
// });

// select.addEventListener('change', () => {
//     console.log('change value');
//     document.body.style.backgroundColor = 'red'
// });

// input.addEventListener('input',()=>{
//     document.body.style.backgroundColor = 'purple'
//     console.log('value in realtime');
// });

// input.addEventListener('focus',()=>{
//     document.body.style.backgroundColor = 'pink'
//     console.log('enter');
// });

// input.addEventListener('blur',()=>{
//     document.body.style.backgroundColor = 'blue'
//     console.log('out');
// });



// ==========Window / Document Events=========

// Events                Discription
// load                  Page fully loaded
// scroll                page scroll
// resize                window size change









// ==========ClipBoard Events=========

// Events                Discription
// copy                  copy content
// cut                   cut content
// paste                 paste content