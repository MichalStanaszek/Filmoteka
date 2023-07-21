import api from './api.js';
import { Notiflix, Loading, Notify } from 'notiflix';

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
      console.log('project.js');

      Loading.remove();
    }, 2000);
  }
}

function createMovieCardId(movieId) {
  return 'movie-' + movieId;
}

const SEARCH_FORM_ELEMENT_ID = 'search-form';
const MOVIE_CARD_ELEMENTS_CSS_CLASS = 'movie-card';
const NUM_OF_MOVIES_PER_PAGE = 20;
const PRIMARY_COLOR_HEX = '#FF6B01';
const FONT_FAMILY = 'Roboto';

let env = 'dev'; // or any other if we move to PRODUCTION stage
let currentPage = 1;

Loading.init({
  svgColor: PRIMARY_COLOR_HEX,
});

Notify.init({
  position: 'right-bottom',
  fontFamily: FONT_FAMILY,
});

if (env == 'dev') {
  notiflixTest();
}

export default {
  api,
  Loading,
  Notify,
  apiTest,
  notiflixTest,
  createMovieCardId,
  SEARCH_FORM_ELEMENT_ID,
  MOVIE_CARD_ELEMENTS_CSS_CLASS,
  NUM_OF_MOVIES_PER_PAGE,
  currentPage,
};
