const submitBtn = document.querySelector('.btn');
const form = document.querySelector('#my-form');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.add('bg-dark');
});