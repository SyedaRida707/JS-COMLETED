// ===================Date Object=========================
// Date is a built in js class we use the new keyword 
// to create an object  (intance) of that class.

// Date is a built-in JavaScript class used to work with dates and times.
// A class is like a blueprint/template for creating objects.
// We use the new keyword to create an object (instance) from the Date class.
// Instance means an object created from a class.

// Date → Built-in class
// new → Creates a new object
// today → Variable containing the Date object
// new Date() → Date object / instance

// let today = new Date();
// console.log(today);
// console.log('Year ', today.getFullYear());
// console.log('month (0 to 11) ', today.getMonth());
// console.log('Day of month', today.getDate());
// console.log('Day of week (0 to 6)', today.getDay());
// console.log('Hourse', today.getHours());
// console.log('minutes', today.getMinutes());
// console.log('second', today.getSeconds());

// give in string
// console.log(today.toLocaleDateString());
// console.log(today.toLocaleTimeString());


// This code converts 24-hour time into 12-hour format by subtracting 12 from hours greater than or equal to 12.
// console.log(today.getHours() < 12 ? today.getHours() : today.getHours() - 12); // if 13 -12 => 1





// ========================Crete Clock==================================


// First way
// Outside setInterval() → new Date() runs once, so time does not update.
// new Date() runs only once.
// setInterval() repeats every 1 second.
// But it keeps using the same old Date object.
// Therefore, the time does not update.


// let now = new Date();
// let h2 = document.querySelector('h2');

// setInterval(() => {
//     h2.innerHTML = now.toLocaleTimeString();
//     console.log(now.toLocaleTimeString());

// }, 1000);



// Second way
// Inside setInterval() → new Date() runs every second, so time updates.
// setInterval() runs every 1 second.
// new Date() runs every time the interval repeats.
// A new Date object is created with the current time.
// Therefore, the time updates every second.



setInterval(()=>{
    document.querySelector('h2').textContent = new Date().toLocaleTimeString()
},1000);


