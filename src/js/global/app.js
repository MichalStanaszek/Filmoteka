import api from './api.js';
import { Loading, Notify } from 'notiflix';

async function apiTest(scriptFilename) {
  if (env == 'dev') {
    const res = await api.get('search/keyword?query=monster');

    console.log(scriptFilename + ' api test:');
    console.log(res);
  }
}

async function notiflixTest() {
  if (env == 'dev') {
    Loading.circle();

    setTimeout(function () {
      Notify.success('Notiflix Test');
      console.log('app.js');

      Loading.remove();
    }, 2000);
  }
}

function createMovieCardId(movieId) {
  return 'movie-' + movieId;
}

function getMovieIdFromMovieCardElement(moveCardElement) {
  const movieId = moveCardElement.id.split('-');

  return movieId[1];
}

const SEARCH_FORM_ELEMENT_ID = 'search-form';

const WATCHED_BUTTON_ELEMENT_ID = 'watched-button';
const QUEUE_BUTTON_ELEMENT_ID = 'queue-button';

const MOVIE_CARDS_PARENT_ELEMENT_ID = 'gallery';
const MOVIE_CARD_ELEMENTS_CSS_CLASS = 'movie-card';

const LOCAL_STORAGE_QUEUE_KEY = 'queue_movies';
const LOCAL_STORAGE_WATCH_KEY = 'watch_movies';

const NUM_OF_MOVIES_PER_PAGE = 20;
const PRIMARY_COLOR_HEX = '#FF6B01';
const FONT_FAMILY = 'Roboto';

let env = 'dev'; // or any other if we move to PRODUCTION stage
let currentPage = 1;
let renderMovieCardHTML = null;

Loading.init({
  svgColor: PRIMARY_COLOR_HEX,
});

Notify.init({
  position: 'right-bottom',
  fontFamily: FONT_FAMILY,
});

notiflixTest();

export default {
  api,
  Loading,
  Notify,
  apiTest,
  notiflixTest,
  createMovieCardId,
  getMovieIdFromMovieCardElement,
  SEARCH_FORM_ELEMENT_ID,
  WATCHED_BUTTON_ELEMENT_ID,
  QUEUE_BUTTON_ELEMENT_ID,
  MOVIE_CARDS_PARENT_ELEMENT_ID,
  MOVIE_CARD_ELEMENTS_CSS_CLASS,
  LOCAL_STORAGE_QUEUE_KEY,
  LOCAL_STORAGE_WATCH_KEY,
  NUM_OF_MOVIES_PER_PAGE,
  currentPage,
  renderMovieCardHTML,
};
