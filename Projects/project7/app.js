// let allQ = document.querySelectorAll('.questions h2');

// first way
// allQ.forEach((Q, I) => {

//     Q.addEventListener('click', () => {

//         allQ.forEach((q, i) => {
//             console.log(q, i, 'click index', I);
//             if (i != I) {
//                 q.lastElementChild.innerHTML = '❌';
//                 q.nextElementSibling.classList.remove('showans');
//             }

//         });

//         if (Q.lastElementChild.innerHTML == '❌') {
//             Q.lastElementChild.innerHTML = '➖'
//         } else {
//             Q.lastElementChild.innerHTML = '❌'
//         }
//         Q.nextElementSibling.classList.toggle('showans');
//     });
// });

let allQ = document.querySelectorAll('.questions h2');

// second way

allQ.forEach((Questions, Index) => {
    console.log(Questions, Index);

    Questions.addEventListener('click', () => {
        allQ.forEach((q, i) => {
            console.log(q, 'click', i, Index);
            if (i != Index) {
                q.lastElementChild.innerHTML = '❌';
                q.nextElementSibling.style.display = 'none';
            }
        });

        if (Questions.lastElementChild.innerHTML == '❌') {
            Questions.lastElementChild.innerHTML = '✔';
            Questions.nextElementSibling.style.display = 'block';
        } else {
            Questions.lastElementChild.innerHTML = '❌';
            Questions.nextElementSibling.style.display = 'none';
        }

    });

});

