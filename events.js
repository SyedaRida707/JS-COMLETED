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