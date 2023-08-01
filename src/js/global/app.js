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

const renderMovieCardHTML = async function (movieId) {
  try {
    const movieObject = await api.get('movie/' + movieId);

    const moviePoster =
      'https://image.tmdb.org/t/p/w500' + movieObject.poster_path;
    const movieYear = movieObject.release_date.split('-')[0];
    const movieTitle = movieObject.original_title;

    const genresArray = [];

    let genres = '';

    for (const genre of movieObject.genres) {
      genresArray.push(genre.name);
    }

    if (genresArray.length > 2) {
      genres = `${genresArray[0]}, ${genresArray[1]}, Other`;
    } else {
      genres = genresArray.join(', ');
    }

    return `
      <li class = "movie-card" id="${createMovieCardId(movieId)}">
          <div class="movie-thumb">
            <img class="movie-image" src="${moviePoster}" alt="Poster image" loading="lazy" />
          </div>
          <div class="movie-info">
            <p class="movie-name">${movieTitle}</p>
            <p class="movie-genres">${genres} | ${movieYear}</p>
          </div>
        </li>`;
  } catch (error) {
    console.log('API: Movie ' + movieId + " don't exist in api database!");

    return '';
  }
};

const showMovieCards = async function (moviesArray) {
  let html = '';

  for (const movie of moviesArray.results) {
    html += await renderMovieCardHTML(movie.id);
  }

  return html;
};

const getMoviesByKeyWord = async function (keyword) {
  Loading.circle();

  const galleryULElement = document.getElementById(
    MOVIE_CARDS_PARENT_ELEMENT_ID
  );

  galleryULElement.innerHTML = '';

  const movies = await api.get(
    `discover/movie?with_keywords=${keyword}&page=${currentPage}`
  );
  const movieCards = await showMovieCards(movies);


  Loading.remove();

  if (movies.total_results > 0) {
    currentKeyword = keyword;
    totalPages = movies.total_pages;
    onSearchSuccess();
    galleryULElement.innerHTML = movieCards;
  } else {
    currentKeyword = '';
    totalPages = 0;
    onSearchFailed();
  }

  setPaginationButtons();
};

const getMoviesTodayTrends = async function () {
  Loading.circle();

  const galleryULElement = document.getElementById(
    MOVIE_CARDS_PARENT_ELEMENT_ID
  );

  const movies = await api.get(`movie/popular?page=${currentPage}`);
  const movieCards = await showMovieCards(movies);

  galleryULElement.innerHTML = movieCards;

  totalPages = movies.total_pages;
  setPaginationButtons();
  Loading.remove();
};

const getMovieByID = async function (movieId) {
  Loading.circle();

  const movie = await api.get('movie/' + movieId);

  Loading.remove();

  return movie;
};

const onSearchFailed = function () {
  const searchMsg = document.querySelector('.search-msg');
  
  searchMsg.classList.remove('hidden');
};

const onSearchSuccess = function () {
  const searchMsg = document.querySelector('.search-msg');

  searchMsg.classList.add('hidden');
};

let getQueuedMovies = null;
let getWatchedMovies = null;

const setPaginationButtons = function () {
  const firstBtn = document.getElementById('first-btn');
  const lastBtn = document.getElementById('last-btn');

  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const btn4 = document.getElementById('btn4');
  const btn5 = document.getElementById('btn5');

  const buttonsArray = [btn1, btn2, btn3, btn4, btn5];

  let activeBtn = null;

  firstBtn.textContent = '1';
  firstBtn.value = '1';

  lastBtn.textContent = totalPages;
  lastBtn.value = totalPages;

  if (currentPage < 3) {
    btn1.textContent = '1';
    btn1.value = '1';

    btn2.textContent = '2';
    btn2.value = '2';

    btn3.textContent = '3';
    btn3.value = '3';

    btn4.textContent = '4';
    btn4.value = '4';

    btn5.textContent = '5';
    btn5.value = '5';
  } else if (currentPage > totalPages - 3) {
    btn1.textContent = totalPages - 4;
    btn1.value = totalPages - 4;

    btn2.textContent = totalPages - 3;
    btn2.value = totalPages - 3;

    btn3.textContent = totalPages - 2;
    btn3.value = totalPages - 2;

    btn4.textContent = totalPages - 1;
    btn4.value = totalPages - 1;

    btn5.textContent = totalPages;
    btn5.value = totalPages;
  } else {
    btn1.textContent = currentPage - 2;
    btn1.value = currentPage - 2;

    btn2.textContent = currentPage - 1;
    btn2.value = currentPage - 1;

    btn3.textContent = currentPage;
    btn3.value = currentPage;

    btn4.textContent = currentPage + 1;
    btn4.value = currentPage + 1;

    btn5.textContent = currentPage + 2;
    btn5.value = currentPage + 2;
  }

  buttonsArray.forEach(btn => {
    btn.classList.remove('active');
  });

  activeBtn = buttonsArray.find(btn => btn.value == currentPage);
  activeBtn.classList.add('active');
};

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
  Notify,
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
  totalPages,
  currentWebPage,
  currentKeyword,
  renderMovieCardHTML,
  showMovieCards,
  onSearchFailed,
  onSearchSuccess,
  setPaginationButtons,
};
