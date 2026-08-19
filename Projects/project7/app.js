let allQ = document.querySelectorAll('.questions h2');
// console.log(allQ);

allQ.forEach((Q, I) => {
    // console.log(Q, I);

    Q.addEventListener('click', () => {
        allQ.forEach((h, i) => {
            // console.log(h.innerHTML);
            // console.log(h.nextElementSibling);
            // console.log(h, i);
            
            
        });
    });
});

