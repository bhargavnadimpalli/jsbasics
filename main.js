const submitBtn = document.querySelector('.btn');
const form = document.querySelector('#my-form');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.backgroundColor = '#ccc';
});