let menu = document.querySelector('.menu');
let ul = document.querySelector('ul')

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-rectangle-xmark');
    ul.classList.toggle('showme');
});