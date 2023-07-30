import app from './global/app';

function activeLink() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => button.classList.remove('active'))
    event.target.classList.add('active')
}
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', activeLink));