import app from './global/app';

const searchMsg = document.querySelector('.search-msg');
const searchForm = document.getElementById(app.SEARCH_FORM_ELEMENT_ID);

function onSubmit(event) {
  const keyword = event.target.elements.keyword.value;

  event.preventDefault();
  app.getMoviesByKeyWord(keyword);
}

searchForm.addEventListener('submit', onSubmit);

app.onSearchFailed = function () {
  searchMsg.classList.remove('hidden');
};

app.onSearchSuccess = function () {
  searchMsg.classList.add('hidden');
};
