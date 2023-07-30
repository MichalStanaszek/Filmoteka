import app from './global/app';

const formError = document.querySelector('.FormError');
const formInput = document.querySelector('.FormInput');

formError.classList.add('hidden');

app.onSearchFailed = function () {
  formError.classList.remove('hidden');
};
