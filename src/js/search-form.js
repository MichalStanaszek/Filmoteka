import app from './global/app';

const formError = document.querySelector('.FormError');
const formInput = document.querySelector('.FormInput');
const formSearch = document.querySelector('.FormSearch');

formError.classList.add('hidden');

app.onSearchFailed = function onSearchFailed(event) {
  event.preventDefault();

  if (formInput.value.length === 0) {
    formError.classList.remove('hidden');
  } else {
    formError.classList.add('hidden');
  }

  return;
};
