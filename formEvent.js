// =================Form Event, preventDefault()===================
// submit event => Triggered when a form is submitted.
// event.preventDefault() => stops default form submission (page reload).

// Example
// let body = document.querySelector('body');
// body.addEventListener('contextmenu', (e) => {
//     body.style.backgroundColor = 'pink';
//     console.log('i am fire');
//     e.preventDefault(); //stop to open the right click
// });

// Example
// let form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     let input = e.target.user.value
//     console.log('username', input);
//     e.preventDefault();  // stop page reload
//     e.target.reset();    // empty form
// });

// Method                     Used on                       purpose
// getAttribute()             Any html element              Read an attribute
// reset()                    form element                  Restore form fields to initial value
//                                                          if initial value is empty field become empty

// let form = document.querySelector('form');
// console.log(form.firstElementChild.getAttribute('for'));
;