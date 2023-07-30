import app from './global/app';

const formError = document.querySelector('.FormError');

formError.classList.add('hidden');

app.onSearchFailed = function () {
  formError.classList.remove('hidden');
};
