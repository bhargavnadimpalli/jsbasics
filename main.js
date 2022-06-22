const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const usersList = document.querySelector('#users');
const message = document.querySelector('.msg');

form.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput === '') {
        alert('please fill the details');
    } else {
        alert('sucesss');
    }
}