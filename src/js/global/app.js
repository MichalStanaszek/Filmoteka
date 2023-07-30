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

let env = 'dev'; // or any other if we move to PRODUCTION stage
let currentPage = 1;
let currentWebPage = ""; // "home" or "library" ta zmienna jest ustawiana automatycznie przy starcie całej strony
let currentKeyword = "";

/*
 UWAGA! Zanim użyjemy funkcji którejś z poniższych sprawdzamy za pomocą if czy ta funkcja już istnieje
 */

let renderMovieCardHTML = null; // do tej zmiennej trzeba przypisać funkcje renderowania karty filmu, funkcja ma pobierać id filmu a zwracać html
let showMovieCards = null; // funkcja ma tworzyć liste kart filmów, pobierać ma tablice z filmami, a zwracać html listy filmów

let getMoviesByKeyWord = null; // do tej zmiennej trzeba przypisać funkcje pobierania filmów z api, funkcja ma pobierać słowo kluczowe, a zwracać obiekt z filmami
let getMoviesTodayTrends = null;
let getMovieByID = null; // do tej zmiennej trzeba przypisać funkcje pobierania filmu z api, funkcja ma pobierać id filmu a zwracać obiekt filmu

let onSearchFailed = null; // do tej zmiennej trzeba przypisać funkcje która będzie potrzebna aby wypisać błąd pod formularzem wyszukiwania filmów

let getQueuedMovies = null; // do tej zmiennej trzeba przypisać funkcje pobierania filmów z Local Storage, funkcja ma zwracać obiekt z filmami
let getWatchedMovies = null; // do tej zmiennej trzeba przypisać funkcje pobierania filmów z Local Storage, funkcja ma zwracać obiekt  z filmami

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
  currentWebPage,
  currentKeyword,
  renderMovieCardHTML,
  showMovieCards,
  onSearchFailed,
};
