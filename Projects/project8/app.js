let form = document.querySelector('form');
let span = document.querySelector('#error');
let userData = [];

form.addEventListener('submit', (e) => {
    let name = e.target.username.value;
    let email = e.target.useremail.value;

    let userObject = {
        name,
        email
    }

    let checkEmail = userData.find((items) => items.email == email);

    if (checkEmail) {
        span.innerHTML = `This email already exist ${checkEmail.email}`;
        setTimeout(() => {
            span.innerHTML = '';
        }, 2000)
        // alert('email already exist');
        // console.log('email already exist', email);
    } else {
        userData.push(userObject);
        getData();
    }

    e.target.reset();
    e.preventDefault(); //stop to reload page


});

let tbody = document.querySelector('tbody');
let getData = () => {

    let tableRow = '';
    userData.forEach((itemss, index) => {

        tableRow += `<tr>
                    <td>${index + 1}</td>
                    <td>${itemss.name}</td>
                    <td>${itemss.email}</td>
                    <td><button data-id="${index}">Delete</button></td>
                </tr>`
    });

    tbody.innerHTML = tableRow;

}

tbody.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        if (confirm('are you sure want to delete')) {
            let getID = e.target.getAttribute('data-id');
            userData.splice(getData, 1);
            getData();
        }
    }
});
