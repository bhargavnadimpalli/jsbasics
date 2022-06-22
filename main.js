const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const usersList = document.querySelector('#users');
const message = document.querySelector('.msg');

form.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput === '') {
        message.classList.add('error');
        message.innerHTML = 'please enter data';
        setTimeout(() => message.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
        );
        usersList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}