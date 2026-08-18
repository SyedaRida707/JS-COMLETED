let img = document.querySelector('.main');
let showImg = document.querySelector('.show img');
let div = document.querySelector('.showitems');
let span = document.querySelector('span');
let divShow = document.querySelector('.show');

img.addEventListener('click', (e) => {
    console.log('click');

    if (e.target.tagName == 'IMG') {
        let getImage = e.target.src
        div.style.display = 'block'
        showImg.src = getImage
    }
});

span.addEventListener('click', () => {
    div.style.display = 'none'
});

div.addEventListener('click', () => {
    div.style.display = 'none'
});

divShow.addEventListener('click', (e) => {
    e.stopPropagation()
});