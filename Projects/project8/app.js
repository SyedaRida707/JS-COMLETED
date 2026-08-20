let form = document.querySelector('form');
let userData = [];

form.addEventListener('submit', (e) => {
    let name = e.target.username.value;
    let email = e.target.useremail.value;

    let userObject ={
        name,
        email
    }
    let checkEmail = userData.find((items) => items == items.email)
    e.preventDefault(); //stop to reload page
});

