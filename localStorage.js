// ===============localStorage===================
// what is localstorage?
// LocalStorage is a browser feature used to store data persistently on the client side.
// The data is stored as key-value pairs.

// Main Features:
// Data is stored in the browser.
// Data remains saved even after refreshing the page.
// Data remains saved after closing and reopening the browser.
// It has no expiration date.
// Data stays until it is manually deleted.
// Storage limit is approximately 5–10 MB, depending on the browser.
// LocalStorage stores data as strings.

// Example use case
// LocalStorage can be used to:
// Save user preferences such as theme or language.
// Keep cart items in e-commerce websites.
// Store form data temporarily.
// Save login preferences (non-sensitive data).
// Remember user settings.


// METHOD                                    DISCRIPTION
// LocalStorage.setItem(key,value)           store data
// LocalStorage.getItem(key)                 Retreive
// LocalStorage.removeItem(key)              Delete specific key
// LocalStorage.clear()                      Deletes all LocalStorage data
// LocalStorage.key(index)                   get key name by index

// localStorage.setItem('name','rida abid');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.clear();
// console.log(localStorage.key(0));


// Example
// let btns = document.querySelectorAll('button');
// console.log(btns);

// btns.forEach((buttons) => {
//     buttons.addEventListener('click', () => {
//         console.log(buttons.innerHTML.toLowerCase());
//         localStorage.setItem('bgColor', buttons.innerHTML.toLowerCase());
//         localStorage.setItem('time', new Date().toLocaleTimeString());
//         localStorage.setItem('Date', new Date().toDateString());
//         document.body.style.backgroundColor = localStorage.getItem('bgColor');
//     });
// });



