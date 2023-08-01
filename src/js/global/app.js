import api from './api.js';
import { Loading, Notify } from 'notiflix';

function createMovieCardId(movieId) {
  return 'movie-' + movieId;
}

function getMovieIdFromMovieCardElement(moveCardElement) {
  const movieId = moveCardElement.id.split('-');

  return movieId[1];
}

const MOVIE_WINDOW_BACKDROP_DIV_ELEMENT_ID = 'movie-window-backdrop';
const ABOUT_WINDOW_BACKDROP_DIV_ELEMENT_ID = 'about-window-backdrop';
const SEARCH_FORM_ELEMENT_ID = 'search-form';
const ABOUT_LINK_A_ELEMENT_ID = "about-us";
const ABOUT_WINDOW_CLOSE_BTN_ELEMENT_ID = "about-close-button";

const WATCHED_BUTTON_ELEMENT_ID = 'watched-button';
const QUEUE_BUTTON_ELEMENT_ID = 'queue-button';

const MOVIE_CARDS_PARENT_ELEMENT_ID = 'gallery';
const MOVIE_CARD_ELEMENTS_CSS_CLASS = 'movie-card';

const LOCAL_STORAGE_QUEUE_KEY = 'queue_movies';
const LOCAL_STORAGE_WATCH_KEY = 'watch_movies';

const NUM_OF_MOVIES_PER_PAGE = 20;
const PRIMARY_COLOR_HEX = '#FF6B01';
const FONT_FAMILY = 'Roboto';

let currentPage = 1;
let totalPages = 0;
let currentWebPage = "";
let currentKeyword = "";

let renderMovieCardHTML = null;
let showMovieCards = null;

let getMoviesByKeyWord = null;
let getMoviesTodayTrends = null;
let getMovieByID = null;
let addMovieToQueued = null;
let addMovieToWatched = null;

let onSearchFailed = null;
let onSearchSuccess = null;

let getQueuedMovies = null;
let getWatchedMovies = null;

let setPaginationButtons = null;

Loading.init({
  svgColor: PRIMARY_COLOR_HEX,
});

Notify.init({
  position: 'right-bottom',
  fontFamily: FONT_FAMILY,
});

export default {
  api,
  Loading,
  createMovieCardId,
  getMovieIdFromMovieCardElement,
  getMovieByID,
  getMoviesByKeyWord,
  getMoviesTodayTrends,
  getWatchedMovies,
  getQueuedMovies,
  addMovieToQueued,
  addMovieToWatched,
  MOVIE_WINDOW_BACKDROP_DIV_ELEMENT_ID,
  ABOUT_WINDOW_BACKDROP_DIV_ELEMENT_ID,
  ABOUT_WINDOW_CLOSE_BTN_ELEMENT_ID,
  ABOUT_LINK_A_ELEMENT_ID,
  SEARCH_FORM_ELEMENT_ID,
  WATCHED_BUTTON_ELEMENT_ID,
  QUEUE_BUTTON_ELEMENT_ID,
  MOVIE_CARDS_PARENT_ELEMENT_ID,
  MOVIE_CARD_ELEMENTS_CSS_CLASS,
  LOCAL_STORAGE_QUEUE_KEY,
  LOCAL_STORAGE_WATCH_KEY,
  NUM_OF_MOVIES_PER_PAGE,
  currentPage,
  totalPages,
  currentWebPage,
  currentKeyword,
  renderMovieCardHTML,
  showMovieCards,
  onSearchFailed,
  onSearchSuccess,
  setPaginationButtons,
};
