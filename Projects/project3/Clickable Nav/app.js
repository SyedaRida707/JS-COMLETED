let span = document.querySelector('span');
let ul = document.querySelector('ul');
let menuIcon = '&#9776;';
let closeIcon = '&#10005;'

span.addEventListener('click', () => {
    ul.classList.toggle('showmenu');
    span.innerHTML = ul.classList.contains('showmenu') ? closeIcon : menuIcon;
});