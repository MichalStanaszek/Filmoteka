import app from './global/app';

const formError = document.querySelector('.FormError');

app.onSearchFailed = function () {
  formError.classList.remove('hidden');
};

app.onSearchSuccess = function () {
  formError.classList.add('hidden');
}
